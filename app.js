const http = require('http');
const router = require('./router');

http.createServer((req, res) => {
    router.index(req, res);
    router.homePage(req,res);
    router.ecommerceTracking(req,res);
    router.discoveryServerSide(req,res);
}).listen('1234', '127.0.0.1');

console.log('Server running at http://127.0.0.1:1234');
