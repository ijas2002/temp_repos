const {readFile ,writeFile} = require('fs');

readFile('./textFolder/first.txt','utf8',(error,result)=>{
    if(error){
        console.log(error);
    }
    console.log(result);
})