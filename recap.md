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

10/08

5.0 Returning HTMl
res.send("dafsdf")로 html을 send할수있지만, 너무 고되다...
매번 복붙하지않도록 해주는 기능이 필요 ->pug

5.1 Configuring Pug
Pug->템필릿 엔진(template Engine)->템플릿을 이용해서 뷰만드는걸 돕는다

1.npm i pug이후,
2.express에게 pug를 html헬퍼로 쓰고싶다고 말해야한다.
express공식문서를 보면 app에 view engine을 세팅할수 있다.
이 view engine이 이제 pug임을 공표하면된다.
app.set("view engine","pug") 3. process.cwd().+/views

/views에 pug파일 만들고 res.render("")

5.2 Partials
pug의 진정한 강점->partial있으면 복붙안해도된다.
ex.)include partials/footer.pug

5.3 Extending Templates
base를 만들고 이를 확장하는식으로 만들어보자!
ex.) extends base.pug
extends는 상속의 개념으로 알자
base.pug에
block content 생성->상속받는 pug들에게 자신이 할수 있는것을 제공
render->code를 html로 바꾸는것
5.4 variables to Templates
#{pageTitle}->우리가 변수를 제공해줘야한다.
컨트롤러가 render하므로 variable을 넣어주자.
ex.) res.render("Home",{pageTitle:"Home"}//템플릿에 보낼 변수)
5.8iteration
variable이 배열이면 each video in videos
5.9 mixins
mixin은 데이터를 받을수 있는 partial의 개념이다.
/mixin
mixin video(info)
info.dfsdf
info.dfsd
/home pug
include mixins/video
each potato in videos
+video(potato)

10/12
6.0 Array Database part one
const id =req.params.id
const {id}=req.params // because of ES6
6.1 Array Database part Two
return res.render("watch",{pageTitle: `Watching ${video.tite}` video:video//video})
difference between absolute url and relative url
"/edit"-> absolute url
"edit"-> relative url
ex> /edit/password -> /edit/potato

6.2 Edit Video part One
back end를 보내는법을 알아보자
form(action ="")//보내야할 url
form(method = "POST")
get request과 post request의 차이점: post 파일을 보내거나 데이터를 보내거나 로그인할때 사용
get은 검색을 할때 씁니다.(database변경)
videoRouter.post("id(//)/edit",postedit)
6.3 Edit Video part Two
get - 접근
post - 전송
redirect - 다시보내다
parameter - 매개변수
express는 form으로 보낸 데이터를 읽지못함
app.use(express.urlencoded(){extended:true})//application이 form을 이해해서 req.body사용간으
6.5 More Practice part one
6.6 More Practice part two
6.7 Introduction of MongoDB
MongoDB - document based database
MongoDB 저장되는것들 -> json-liked-documents != row기반 database
{
"\_id": "dsfsdf"
.....
}-> 와같은 형태로 database는 저장
you need to install to use mongoDB
6.8 connecting to Mongo
mongoose- mongoDB와 NODEJS의 다리가되어주는 역할
ex)우리가 javascript를 작성하여 mongoDB에 전달해주는것이 mongoose의 역할
now we're going to connect mongo database
import mongoose from "mongoose";
mongoose.connect(mongodb_url+(/my db));//새로운 나의 db에 연결
6.9 CRUD introduction
now we're ready to make real data in DB!!!
10/13
6.10 Video Model
import mongoose from "mongoose"
before make model -> define shape of the model -> schema
const videoSchema = new mongoose.Schema(
{
title: String, //you have to define the type
description: String,
createdAt: Date,
hashtags: [{type:String}],
meta: {
views: Number,
rating: Number,
}
}
)//이런식으로 Schema를작성한다.
const movieModel = mongoose.model("Video"//the name of the model, videoSchema)
export default movieModel;
//now we can import it out of the file

6.11 Our first Query
mongooese Documentation에는 많은 queries 들이 존재한다.(CRUD operations을 위한 많은 functions)
mongoose query can be executed int two ways

1. callback
2. promise
   callback
   //function이 끝난다면 일어나는 function(js에서 기다리는 방식)then 방식..
   6.12 Our first Query (2)
   Learn more about callback
   export const home = (req,res) => {
   Video.find({},(error,videos)=>{
   //콜백함수입니다.
   console.log("error",error)
   console.log("videos",videos)
   })
   console.log("Hello")
   }
   순서에도 불구하고 hello,error,video순으로 출력된다. 왜그럴까?
   => callback의힘, 이를 응용해서
   export const home = (req,res) => {
   Video.find({},(error,videos)=>{
   //콜백함수입니다.
   res.render("home",{pageTitle: "Home",videos})
   })

}
와같이 하게된다면, 모든 정보가 전달되고 render이 일어난다!!
6.13 async await
callback은 다소 세련되보이지 않을수도 있다.
promise는 최신 callback방식이라 생각하면 된다.
promise를 사용하면 callback의 장황한 코드를 쓰지 않아도 된다.
export const home = async (req,res) => {
try{
const videos = await Video.find({});
return res.render("home",{pageTitle:"Home", videos})
}catch(error){
return res.render("server-error"{error})
}
}
async일때 await(database를)으로 계속 기다려줄것이다!!
async/await는 대체 왜 필요한 거야? Promise를 기다릴 거면 처음부터 Promise를 안 쓰고 절차형으로 코딩하면 되지! 했는데 외부와 소통할 때(이를테면 다른 서버와..) 애초에 비동기 처리로 제한 되어 있는 상황에서 써야 하는 것
6.14 Returns and Renders

1. return의 역할 : 본질적인 return의 역할보다는 function을 마무리짓는 역할로 사용되고 있음.

- 이러한 경우 return이 없어도 정상적으로 동작하지만 실수를 방지하기 위해 return을 사용

2. render한 것은 다시 render할 수 없음

- redirect(), sendStatus(), end() 등등 포함 (express에서 오류 발생)
  6.15 Creating a Video Part One
  .split(",")->","를기준으로 분리하여 배열 반환
  .map(word=>`#${word}`)->#를 붙여서 반환해줍니다.
  mongoose는 고유 id도 제공합니다.
  10/14
  6.16 Creating a Video part Two
  mongoose는 올바른 TYPE이아니면 데이터를 받지 않는다.
  await video.save(); -> 이제 db에 비디오가 저장된다.
  await Video.create() //만드는것
  6.17 Exceptions and Validation
  createdAt: {type:Date, required: true, default: Date.now}
  //default설정!!
