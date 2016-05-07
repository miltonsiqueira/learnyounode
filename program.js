var fs = require("fs"),
    buffer = fs.readFileSync(process.argv[2]),
    lines = buffer.toString().split('\n');

console.log(lines.length-1);