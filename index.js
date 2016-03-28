var express = require('express');
var app = express();
var getPalette = require('./lib/getPalette');
var hex = require('./lib/hex2rgb');
app.set('view engine','jade');

app.get('/', function (req, res) {
    res.render('index',{palette:getPalette()});
});
hex('#fff',function(par){
    return par;
});
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});