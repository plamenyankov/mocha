var fs = require('fs');
function getConfig(){
    var p = JSON.parse(fs.readFileSync(process.cwd()+'/config.json').toString());

    return p;
}
var getDate = function(){
    return ["#cc7790","#ff5512","#75d709"];
}
module.exports = function getPalette(){

    var palette = getConfig().palette;
    if(!Array.isArray(palette)){
        throw new Error('Palette is not an array');
    }
    return palette;
}