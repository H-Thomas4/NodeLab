const path = require ('path');
const fs = require ('fs');

// To open file in write and read mode, 
// create file if doesn't exists. 
fs.writeFile("chirps.json", JSON.stringify(data), (err) => {
    if (err) console.log(err);
});

//link paths to each file
// read the data in chirps.json file
fs.readFile(path.join("chirps.json", (err, data) => {
    if (err) console.log(err);
    console.log(data.toString());
}));
