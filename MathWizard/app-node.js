/**
 * Created by JetBrains WebStorm.
 * User: Zia
 * Date: 01/01/12
 * Time: 15:06
 * To change this template use File | Settings | File Templates.
 */

var http_port = 8124;

var http = require('http');
var htutil = require('./htutil');
var server = http.createServer(function (req, res) {
    htutil.loadParams(req, res, undefined);
    if (req.requrl.pathname === '/') {
        require('./home-node').get(req, res);
    } else if (req.requrl.pathname === '/square') {
        require('./square-node').mytestmethod(req, res);
    }
    else if (req.requrl.pathname === '/test') {
        require('./mytest').testmethod(req, res);
    }
    /*else if (req.requrl.pathname === '/factorial') {
        require('./factorial-node').get(req, res);
    } else if (req.requrl.pathname === '/fibonacci') {
        require('./fibo-node').get(req, res);
// require('./fibo2-node').get(req, res);

    }
    */
    else if (req.requrl.pathname === '/mult') {
        require('./mult-node').get(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("bad URL "+ req.url);
    }
});
server.listen(http_port);
console.log('listening to http://localhost:8124');
