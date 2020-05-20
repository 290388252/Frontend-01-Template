const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('request received');
    console.log(req.headers);
    res.setHeader('Content-Type','text/html');
    res.setHeader('X-Foo','bar');
    res.writeHead(200,{ 'Content-Type':'text/plain' });
    // res.end("hello connection success!!");
    res.end(
        `<html maaa=a >
    <head>
        <title>HTML parser</title>
        <style>
        body div #myid{
        width:100px;
        background-color: #ff5000;
    }
    body div img{
        width:30px;
        background-color: #ff1111;
    }
        </style>
    </head>
    <body>
        <div>
            <img id='myid'/>
        </div>
    </body>
    </html>`
    );
})

server.listen(8088);
console.log('server running at http://localhost:8088')
console.log('server running at http://127.0.0.1:8088')
