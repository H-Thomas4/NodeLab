var path = require ('path');
var fs = require ('fs');

fs.readFile(path.join(_dirname, 'chirps.json'), function(err,data) {
    if(err) return console.log(err);

    console.log(data.toString());
});

