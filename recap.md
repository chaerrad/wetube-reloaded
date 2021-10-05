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

3.0 Your first server
