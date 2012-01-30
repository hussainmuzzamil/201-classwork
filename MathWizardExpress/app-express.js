/**
 * Created by JetBrains WebStorm.
 * User: Zia
 * contributer: Muzzamil Hussain
 * Date: 08/01/12
 * Time: 14:05
 * To change this template use File | Settings | File Templates.
 */

var express = require('express'); // refering to express
var app = express.createServer(
    express.logger() //registering logs at console for the server access
    //express.logger({format:':method :url :date'}) //registering logs at console for the server access
);
app.register('.html', require('ejs'));
// Optional since express defaults to CWD/views
app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');
app.configure(function(){
    app.use(app.router);
    app.use(express.static(__dirname + '/views'));

});

app.set('view options', { layout: false });

app.get('/', function(req, res) {
    res.render('home.html',{hello: "<h1>my data</h1>",abc:45,xyz: req.params.val});
});

app.get('/user/:id/:abc?', function(req, res) {
    res.render('home.html',{hello: "<h1>my data</h1>",abc:req.params.abc,xyz: req.params.id});
});

app.get('/testAjax', function(req, res) {
    res.render('testAjax.html');
});

app.get('/testAjaxAction', function(req, res) {
    //res.writeHead(200, {'content-type': 'text/json' });
    console.log("request received");
    //res.send("{\"hello\":\"first\"}");
    res.send(JSON.stringify({hello:'first'}));
});

app.listen(3000);

console.log("Server started");