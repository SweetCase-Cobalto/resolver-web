import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import fileDownload from "js-file-download";

import ResolverNavbar from "../../../components/ResolverNavbar";
import { MainLayer } from "../../../components/Layers";
import axios from "axios";

const PCFLPage = () => {

    const READY = 0;
    const PROCESSING = 1;

    const [inputs, setInputs] = useState({
        file: null,
        interval: 0.01,
    });
    
    const [processStatus, setProcessStatus] = useState(READY);

    const submitEvent = (e) => {
        e.preventDefault();
        // check input file
        if (inputs.file === null) {
            window.alert('작업할 미디파일을 추가해 주세요.');
            return;
        }
        // Form Data 설정
        const formData = new FormData();
        formData.append('file', inputs.file, inputs.file.name);
        formData.append('interval', inputs.interval);
        // 백엔드 전송
        const url = 'http://localhost:8000/api/public/pcfl'
        axios.post(url, formData, {
            responseType: 'blob',
            headers: {
                'content-type': 'multipart/form-data',
                'Accept': 'multipart/form-data',
            } 
        }).then((res) => {
            // 성공시 파일 다운로드
            fileDownload(res.data, inputs.file.name);
        }).catch((e) => {
            // Error
            let errorRes = e.response;
            if (errorRes.status === 400) {
                // 400은 확실한 이유가 존재한다.
                errorRes.data.text()
                    .then((res) => {
                        // 에러 메세지
                        window.alert(JSON.parse(res).msg);
                    }).catch(() => {
                        // 불러 올 수 없으면 500 error
                        window.alert('server error');
                    })
            } else {
                window.alert('server error');
            }
        }).finally(() => setProcessStatus(READY));
        setProcessStatus(PROCESSING);
    }

    return (
        <div>
            <ResolverNavbar />
            <MainLayer>
                <center>
                    <h1><strong>PCFL</strong></h1>
                    <h4 style={{ marginBottom: "80px" }}><strong>Pedal Compensator for FLstudio</strong></h4>

                    <div style={{ marginBottom: "100px" }}>
                        <p>FL Studio에서 서스테인이 포함된 피아노 Midi File을 Import하면 붙어있는 두 개의 서스테인 라인을 하나로 인식을 하게 되어 불협화음을 발생시킵니다.</p>
                        <p>PCFL는 이를 방지하기 위해 두 서스테인 라인의 간격을 띄워 불협화음을 막게 해주는 서비스 입니다.</p>
                    </div>
                </center>
                <InputLayer>
                    <Form.Group className="mb-3">
                        <Form.Label>서스테인 사이의 간격</Form.Label>
                        <Form.Control type="number"
                            step="0.01" min="0.01" max="0.49"
                            onChange={(e) => setInputs({
                                ...inputs,
                                interval: parseFloat(e.target.value),
                            })}
                        />
                        <Form.Text className="text-muted">
                            0.01과 0.5 사이의 간격이 권장됩니다.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>미디파일</Form.Label>
                        <Form.Control type="file" accept="audio/midi"
                            onChange={(e) => setInputs({
                                ...inputs,
                                file: e.target.files[0],
                            })}
                        />
                        <Form.Text className="text-muted">
                            확장자 .mid만 가능합니다.
                        </Form.Text>
                    </Form.Group>

                    {
                        (processStatus === READY)
                        &&
                        <Button
                            variant='dark'
                            style={{ width: "100%", marginTop: "20px" }}
                            onClick={submitEvent}
                        >
                            교정
                        </Button>
                    }
                    {
                        (processStatus === PROCESSING)
                        &&
                        <Button
                            variant='outline-secondary'
                            style={{ width: "100%", marginTop: "20px" }} disabled
                        >
                            진행중
                        </Button>
                    }

                </InputLayer>
            </MainLayer>
        </div>
    );
}
export default PCFLPage;

const InputLayer = styled.div`
    padding: 40px 30px 40px 30px;
    border: 1px gray solid;
`;