/**
 * Created by vipbs on 18/03/2016.
 */
var hex2rgb = require('../lib/hex2rgb');
var assert = require('chai').assert;
describe('hex2rgb', function () {
    it('Should trow an error if it is not a hex code', function (done) {
        hex2rgb('blue', function (error, result) {
            assert(error);
            done();
        });
    });
    it('Should return valid rgb code', function (done) {
        hex2rgb('#fff', function (error, result) {
            assert.strictEqual(error, null);
            assert.deepEqual(result, [255, 255, 255]);
            done();
        });
    });
});