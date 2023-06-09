const fs = require("node:fs")
const { readFileSync, writeFileSync } = require("node:fs")
// console.log(fs)

function readJSONFile(path, fileName) {
    const whatIsRead = readFileSync(`${path}/${fileName}`, "utf-8")
    return whatIsRead ? JSON.parse(whatIsRead) : []
}


function writeInJSONFile(path, fileName, data) {
    data = JSON.stringify(data)
    // num+=1
    //num = num +1 
    //reassigning num/ "data" 
return writeFileSync(`${path}/${fileName}`, data, {encoding: "utf-8"}) 
}


module.exports = {
    writeInJSONFile,
    readJSONFile,
}