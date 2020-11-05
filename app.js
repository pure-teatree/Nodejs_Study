var express = require('express');
var app = express();
app.locals.pretty = true; //template 코드 정렬
app.set('views', './views'); //views, 템플리트가 있는 디렉토리
app.set('view engine', 'pug'); //view engine, 사용할 템플리트 엔진
app.use(express.static('public')); //public 디렉토리에 정적파일 저장
app.get('/template',function(req,res){
    res.render('temp');
});
app.get('/',function(req,res){
    res.send('Hello home page');
});
app.get('/router',function(req,res){
    res.send('Hello Router,<img src="/1.png"/>')
});
app.get('/login',function(req,res){
    res.send('Login please');
});
app.listen(3000,function(){
    console.log("Connected 3000 port!");
});
app.get('/dynamic',function(req,res){ //동적.
    var lis ='';
    for(var i=0;i<5;i++){
        lis = lis+'<li>coding</li>';
    }
    var output =`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        Hello, Dynamic
        <ul>
        ${lis}
        </ul>
    </body>
    </html>`;
    res.send(output);
});