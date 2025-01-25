const fs = require('fs');

var dataToAppend = "I am from append FIle"
// fs.appendFile('output.txt',dataToAppend,(err)=>{
//     if(err){
//                 console.log(err.message)
//                 return
//             }

//             console.log("Data appended successfully...")
// })


async function readData(data){
    try{
        const data = await fs.promises.readFile('input.txt')
        console.log(data.toString());
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

readData()