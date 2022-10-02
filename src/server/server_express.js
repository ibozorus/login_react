const express = require('express');
const http = require('http');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.static('C:\\Users\\korkm\\Desktop\\Programming\\JS-React Coursera\\login\\static'));

// app.use((req, res, next) => {
//     console.log(req.headers);
//     res.statusCode = 200;
//     res.setHeader('Content-type', 'text/html');
//     res.end('<html><body><h1>This is an Express Server.</h1></body></html>')
// });

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
