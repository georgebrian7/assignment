const fs = require('fs');


const http =require('http');
const server = http.createServer((req, res)=>{
     res.setHeader('Content-Type','text/html');


    let path ='./';
    switch(req.url){
        case'/home':
            path += 'home.html';
            res.statusCode =200;
            break;
        case'/about':
            path += 'about.html';
            res.statusCode =200;
            break;
        default:
            path += '404.html';
            res.statusCode =400;
            break;
        
    }



     fs.readFile(path,(err,data)=>{
        if(err){
            console.log('errorrrrr');
            res.end(); 
        }else{
            res.write(data);
            res.end();
        }
     })
    
});

server.on('connection', (socket)=>{
    console.log('new connection');
});
server.listen(3000, 'localhost' ,()=>{
    console.log('listening on port 3000')
});

// console.log('Listening on port 3000')
// fs.readFile('./joke.txt',(err, data) =>{
//     if(err) {
//         console.log(err);
//     }
//     console.log(data.toString());
    
// });
// fs.writeFile('./joke.txt', 'LOL' ,(data) =>{
//     console.log(data)
// // })
// if(!fs.existsSync('./assets')){
// fs.mkdir('./assets' , (err) =>{
// if(err){
//     console.log(err);
// }
// console.log('folder created')
// });
// } else{
//     fs.rmdir('./assets',(err) =>{
//         if(err){
//             console.log(err)
//         }
//         console.log('folder deleted');
//     })
// }