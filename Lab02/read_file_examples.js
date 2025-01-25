const fs = require('fs');

//console.log(fs);

console.log("---START---");

fs.readFile('input.txt', (error, data) => {
    if(error != null) {
        console.log(error.message);
        return;
    }
    console.log(data.toString());
});

let data = fs.readFileSync('input.txt');
console.log(data.toString());

console.log("---END---");