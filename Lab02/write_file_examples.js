const fs = require('fs');

//var data = "Hello World";
var data = Buffer.from("Hello World GBC");
fs.writeFile("output.txt", data, (err) => {
    if(err) {
        console.log(err.message);
        return;
    }
    console.log('Data written successfully...');
});

data = "TESTING..."
var err = fs.writeFileSync('output.txt', data);
console.log('Data written...');