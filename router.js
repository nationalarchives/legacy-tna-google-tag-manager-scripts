const renderer = require('./renderer');

function index(req, res) {
    if (req.url === '/') {
        res.writeHead( 200, {'Content-Type': 'text/html'} );
        renderer.view('partials/header', {} ,res);
        renderer.view('partials/nav', {} , res);
        renderer.view('index', {}, res);
        renderer.view('partials/footer', {} ,res);
        res.end();
    }
}

function homePage(req,res) {
    if (req.url === '/homePage') {
        res.writeHead( 200, {'Content-Type': 'text/html'} );
        renderer.view('partials/header', {} ,res);
        renderer.view('partials/nav', {} , res);
        renderer.view('homePage', {}, res);
        renderer.view('partials/footer', {} ,res);
        res.end();
    }
}

function ecommerceTracking(req,res) {
    if (req.url === '/ecommerceTracking') {
        res.writeHead( 200, {'Content-Type': 'text/html'} );
        renderer.view('partials/header', {} ,res);
        renderer.view('partials/nav', {} , res);
        renderer.view('ecommerceTracking', {}, res);
        renderer.view('partials/footer', {} ,res);
        res.end();
    }
}

function discoveryServerSide(req,res) {
    if (req.url === '/discoveryServerSide') {
        res.writeHead( 200, {'Content-Type': 'text/html'} );
        renderer.view('partials/header', {} ,res);
        renderer.view('partials/nav', {} , res);
        renderer.view('discoveryServerSide', {}, res);
        renderer.view('partials/footer', {} ,res);
        res.end();
    }
}

module.exports.index = index;
module.exports.homePage = homePage;
module.exports.ecommerceTracking = ecommerceTracking;
module.exports.discoveryServerSide = discoveryServerSide;