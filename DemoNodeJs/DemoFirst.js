/**
 * Created by JetBrains WebStorm.
 * User: Zia
 * Date: 01/01/12
 * Time: 14:33
 * To change this template use File | Settings | File Templates.
 */


var http = require('http');

http.createServer(function (req, res) {


    res.writeHead(200, {'Content-Type': 'text/plain'});



    res.end('Hello World\n');


}).listen(8125, "127.0.0.1");

console.log('Server running at http://127.0.0.1:8124/');