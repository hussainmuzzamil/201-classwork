/**
 * Created by JetBrains WebStorm.
 * User: Zia
 * Date: 01/01/12
 * Time: 17:44
 * To change this template use File | Settings | File Templates.
 */

var connect = require('connect');
var htutil = require('./htutil');
connect.createServer()
    .use(connect.favicon())
    .use(connect.logger())
    .use('/filez', connect.static(__dirname + '/filez'))
    .use(connect.router(function(app){
    app.get('/',
        require('./home-node').get);
    app.get('/square', htutil.loadParams,
        require('./square-node').mytestmethod);

    app.get('/mult', htutil.loadParams,
        require('./mult-node').get);
})).listen(8124);
console.log('listening to http://localhost:8124');
