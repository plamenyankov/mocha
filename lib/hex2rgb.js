/**
 * Created by vipbs on 18/03/2016.
 */
module.exports = function(hex,callback){
    setTimeout(function(){
        if(/^#/.test(hex)){
            hex = hex.slice(1);
        }
        if(hex.length !== 3 && hex.length !==6){
            callback(new Error('Invalid hex decimal string'));
            return;
        }
        var num = hex.split('');
        if(num.length === 3){
            num = [num[0],num[0],num[1],num[1],num[2],num[2]];
        }
        var r = parseInt([num[0],num[1]].join(''),16);
        var g = parseInt([num[4],num[5]].join(''),16);
        var b = parseInt([num[2],num[3]].join(''),16);
        callback(null,[r,g,b]);
    },50);

};