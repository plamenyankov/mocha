var getPalette = require('../lib/getPalette');
var assert = require('chai').assert;
var fs = require('fs');
var configFile = process.cwd() + '/config.json';
function writeConfig(config, callbak) {
    fs.writeFile(configFile, JSON.stringify(config), callbak);
}
describe('getPalette', function () {
    var config = {};
    before(function (done) {
        fs.readFile(configFile, function (err, content) {
            config = JSON.parse(content.toString());
            done();
        });

    });
    afterEach(function (done) {
        writeConfig(config, done)
    });
    it('Should trow an error if it is not an array', function (done) {
        //function fetch(){
        //    return "not an array";
        //}
        //assert.throws(function() {
        //    getPalette(fetch)
        //},/is not an array/
        //);

        writeConfig({palette: "string"}, function (err) {
            assert.throws(getPalette, /is not an array/);
            done();
        });
    });
    it.only('should return an array with 3 items', function () {
        var palette = getPalette();
        //assert(Array.isArray(palette));
        assert.isArray(palette,/did not return an array/);
        //assert.equal(palette.length, 3, "did not return 3");
        assert.lengthOf(palette, 3, "did not return 3");
    })
});