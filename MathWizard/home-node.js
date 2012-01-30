/**
 * Created by JetBrains WebStorm.
 * User: Zia
 * Date: 01/01/12
 * Time: 16:58
 * To change this template use File | Settings | File Templates.
 */


var htutil = require('./htutil');
exports.get = function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end(
        htutil.page("Math Wizard",
            htutil.navbar(),
            "<p>Math Wizard</p>")
    );
}
