# Resolver [Web]

![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

내가 불편해서 만든 웹 서비스

내가 불편해서 직접 개발한 자동화 알고리즘 코드를 서버에 부착해서 서비스하는 프로젝트 입니다. 서버는 NodeJS 기반이자만, 알고리즘 에 사용되는 언어는 그 어떤 언어이든 상관 없습니다. Web은 ReactJS로 구현되었습니다.

각 알고리즘 코드들은 Git Submodule단위로 관리하고 있기 때문에 직접 Repository에 코드를 복사할 필요 없이 개별의 Repository에 저장한 다음 그 Repository를 git-submodule로 설정하는 방식 입니다.

## 현재 내장하고 있는 기능
|서비스명|설명|구현 언어|
|---|---|---|
|[PCFL](https://github.com/Vector-7/PCFL)|Midi파일에서 연속된 서스테인(CC64)의 간격을 벌려서 FL Studio에서 임포트 할 때 불협화음이 발생하지 않게 처리|Python3.9|

Resolver Web Version
* [Backend Repo](https://github.com/SweetCase-Cobalto/resolver)

## 설치 방법 (개발자 기준)
1. Repository를 다운받습니다.
2. NodeJS를 설치합니다. (16 버전 이상이어야 합니다.)
3. Repository로 이동합니다.
4. Node Package들을 설치합니다.
```bash
npm i
```
5. ```.env``` 파일을 생성하고 아래와 같이 작성합니다.
```bash
# .env
REACT_APP_SERVER_URL=<백엔드 호스트>
```
5. 아래 명령어로 웹 프론트엔드를 실행합니다. 
```
npm start
```