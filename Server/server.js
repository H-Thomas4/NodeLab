const path = require ('path');
const fs = require ('fs');

// To open file in write and read mode, 
// create file if doesn't exists. 
fs.open('../chirps.json', 'w+', function (err, f) {
    if (err){
        return console.error(err);
    }
    console.log(f);
    console.log('File Created!');
});;

// read the data in chirps.json file
fs.readFile(path.join("chirps.json", JSON.stringify(data), (err) => {
    if (err) console.log(err);
}));
 


