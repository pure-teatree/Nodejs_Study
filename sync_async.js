var fs = require('fs');

//sync
console.log(1);
var data = fs.readFileSync('data.txt',{encoding:'utf-8'});
console.log(data);

//Async
console.log(2);
fs.readFile('data.txt',{encoding:'utf-8'},function(err,data){
    console.log(3); //4가 실행된후 실행됨. 콜백함수
    console.log(data);
});
console.log(4);