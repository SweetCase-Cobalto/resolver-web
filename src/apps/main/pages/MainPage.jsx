import { MainLayer } from "../../../components/Layers";
import ResolverNavbar from "../../../components/ResolverNavbar";
import { Helmet } from "react-helmet";

const MainPage = () => {
    return (
        <div>
            <Helmet>
                <title>Resolver</title>
            </Helmet>
            <ResolverNavbar />
            <MainLayer>
                <center>
                    <h1 style={{ marginBottom: "30px" }}><strong>Resolver</strong></h1>
                    
                    <p>Resolver는 recoma가 귀찮은 일들을 해결하기 위해 업무자동화한 알고리즘들을</p>
                    <p>재능 기부 목적으로 무상으로 제공하는 서비스 입니다.</p>
                    <p>웹 디자인이 이따구인 이유는 훗날 기능 확장을 할때 귀찮게 코드 갈아엎는것을 방지하기 위함입니다.</p>
                    <p>절대 귀찮아서 디자인을 안한게 아니에요</p>
                    <p><strong>현재 제공하고 있는 서비스는 PCFL 하나 입니다. 차후에 추가될 예정입니다.</strong></p>
                    <p>뭔가 자동화하고 싶은 부분이 있다면 seokbong60@gmail.com로 연락해 주세요. 가능하면 해줄지도?</p>
                    <p>AI만 아니면 커버가 가능합니다.</p>
                </center>
            </MainLayer>
        </div>
    );
}
export default MainPage;