/**
 * Created by JetBrains WebStorm.
 * User: Zia
 * Date: 01/01/12
 * Time: 16:56
 * To change this template use File | Settings | File Templates.
 */


var htutil = require('./htutil');
exports.mytestmethod = function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end(
        htutil.page("Square", htutil.navbar(), [
            (!isNaN(req.a) ?
                ("<p class='result'>{a} squared = {sq}</p>"
                    .replace("{a}", req.a)
                    .replace("{sq}", req.a*req.a))
                : ""),
            "<p>Enter a number to see its square</p>",
            "<form name='square' action='/square' method='get'>",
            "A: <input type='text' name='a' />",
            "</form>"
        ].join('\n'))
    );
}
