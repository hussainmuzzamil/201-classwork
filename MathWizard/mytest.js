/**
 * Created by JetBrains WebStorm.
 * User: Zia
 * Date: 01/01/12
 * Time: 17:18
 * To change this template use File | Settings | File Templates.
 */

var htutil = require('./htutil');
exports.testmethod = function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end('<html><b>this my module to test</b></html>');

}
