# 10/05

1.1 requirements
node-v로 버전확인가능
nodejs가 없다면 구글에서 쳐서 다운로드 가능
1.3 What is NodeJS
브라우저 바깥에서 돌아가는 JS
원래 JS는 브라안에서 웹사이트와의 상호작용을 위해서 고안된 언어이다.(브라우저를 가진 컴퓨터는 JS를 기본으로 알고있다)
Node JS로 React Native, Electron와 같은것들 사용가능.
Node JS가 JS를 알아볼수 있게 컴파일해줌
1.4 What is NPM
NPM은 자바스크립트 언어를 위한 패키지 매니저이다.
NPM은 NodeJS와 상호작용하게 해주고, NodeJS패키지 다운을 허락해준다.
많은사람들이 개발에 쉽게 패키지를 만드는데, npm으로 패키지를 다운받을수 있다.
패키지의 예시) express

2.0 Your First NodeJS Project
json이란 프로그래머가 파일에 정보를 저장하기 위해 만든 방식중 하나.
{
""
}형식이다.
nodeJS의 경우 정보저장 파일의 이름은 package.json이어야한다.
package.json은 nodejs만들때 가장 처음 생성되어야한다.
package.json내
{
"main": index.js //메인 프로젝트 파일을 의미
}
2.1 Installing Express
{
"scripts":{
"dev":
}
} -> npm run dev을 가능하게함
npm i express -> express(패키지)를 설치하겠다.
express를 다운받으면서 express의 dependencies(express를 위한 패키지들)도 다운
npm이 체인처럼 연결된 dependencies를 모두 다운받고 node modules에저장
설치결과 node_modules 와 package-lock.json생성
2.2 Understanding Dependencies
npm install express를 하면 nodemodules에 수많은 express dependencies가 생기고, 나의 package.json에
"dependencies" : {
"express": "^4.17.1"
}이 생김을 알수 있다.
이후에 node_modules과 package-lock.json을 삭제해도
이로인해 npm i를하면 node_modules과 package-lock.json이 자동생성됨을 알수 있다.(npm의 장점!)
package-lock.json은 패키지를 안전하게 저장해줌
결론적으로 .gitignore에 /.node_modules하면 된다.
2.3 The Tower of Babel
babel은 최신 자바스크립트를 컴퓨터가 이해하는 js로 변환해줌
npm install --save-dev @babel/core
이후
"devDependencies":{}
생성
devDependencies는 사람에게 필요한 것이다.
여기선 babel없이는 사람이 최선 js를 쓸수 없으므로 devDependeces에 저장.
babel.config.json파일내
{
"presets":[] //바벨 플러그인 이라고 생각하자
}
2.4 Nodemon
nodemon은 우리 파일이 수정되면 바로 컴파일되게 도와주는 패키지이다.
{
"scripts": "nodemon --exec babel-node index.js"//로수정
}

//여기까지가 개발을 위한 설정이다.
정리하자면, package.json에서 npm i express를 통해 개발에 필요한 dependencies를 설치하고, 우리 스스로도 개발을 쉽게하기위해 babel과 nodemon을 설치했다고 볼수있다.

10/06

3.0 Your first server

import express from "express";
npm은 똑똑해서 "nodemodules/express"라고 하지않아도 잘 인식.

const app = express(); //express-> creates express application
서버란 인터넷이 연결되어있는 항상 켜져있는 컴퓨터이다.
서버는 request를 listen하고있다. 서버는 듣고 답한다.
서버는 나의 행동을 listen하고 나는 서버에 request한다.
app.listen() ->콜백반환

콜백은 바닐라 js에서 배웠듯이
button.addEventListener("click",handleClick)일때 click하면 handleClick이 작동하는 함수

app.listen(4000, handleListening)->4000포트를 통해 listen하고 콜백하겠다는 의미이다.

3-1 Get Requests
서버를 만들면, 유저의 request에 응하는 Server respond를 만들어야한다.
만약 URL을 주소창에 치면, 서버에게 get request를 요청하는것이다.
그리고 브라우저에는 그 반응을 전시한다.

3.2 Get Requests part Two
get은 request의 하나일뿐이다.
express()와 listen()에 request에 응답하는법을 적을것이다.(준비시킨다 보면된다)

app.get("/",callback함수)
이제 response를 해줄차례이다.

3.3 Responses

addEventListener(event)와 같이 express는 req,res를 선물해준다.
req object와 res object 생성
const callback함수 = (req,res) => {

}
request를 받았으면 response를 해주어야한다.
ex) return res.end();//종료, return res.send("I love you");//메시지 출력

3.4 recap
express를 사용해서 app을 만들고, app 은 req이 있고, res도 있다.
또, Router도 있다 (router는 추후배움)

3.5 Middlewares part one

middleware -> middle software
요청과 대답사이에 있다고 보면된다.
middleware함수 = (req,res,next)=>{
next();
}
app.get("/",middleware함수,callback함수)
middleware는 넘기는 함수이다.

3.6 Middlewares part two

app.use(middleware controller) //전역 middleware

app.use(middleware함수)가 app.get과 같은 method앞에 있으면 app.use의 middleware함수를 거치게된다. (단, use가 먼저와야하는 순서를 주의하자)

3.11 External Middlewares
morgan을 다운받으면 쫌더 편한 전역middleware을 사용가능하다.
import morgan from "morgan"
const logger = morgan("dev");
app.use(logger);

10/07
4.0 What are Routers?

라우터는 controller와 url을 쉽게 관리하게 도와준다.(미니 어플리케이션과 같다)
라우터는 작업중인 주제를 기반으로 url을 그룹화해준다.
ex)
/
....
user/
.....
watch
....

4.1 Making our Routers
ex)
const videoRouter = express.Router();
app.use("/videos",videoRouter); -> 그룹화시키고
videoRouter.get("/watch",handleWatchBide)->response도 가능!!
-> /videos/watch url생성!!

4.2 Cleaning the Code
파일간의 import과 export을 통해 서로 정보를 공유
ex)
export default ~~~~;
import ~~~~ form "**\*\***";

url주소 진입 -> 라우터로 -> 라우터의 request와 response 대응

4.3 Exports
한 파일에서 여러 export이 생기면
import {join} from "**\***";
import의 이름 변형없이 그대로 써야한다.

4.7 URL Parameters part One
videoRouter.get("/:id",see); ->/:id는 뭘 의미할까?
':'는 왜 있는걸까?
:id->parameter-> url안에 변수가 있음을 알려준다
:id가 없으면 ("1",see) ("2",see)...를 일일이 만들어줘여한다. 그래서 변수(parameter)가있는것이다.
req.params.id
라우터순서가 중요하다!!

:id가 위에있으면 의도치 않게 문자열도 변수로 인식하고 가져감

4.8 URL Parameters part Two

변수에 오는것을 숫자로만 제한하는방법
:id(\\d+)

추후 정규식에 대해 쫌더 알아봐야함.
