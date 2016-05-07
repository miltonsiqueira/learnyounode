var i = 2,
    sum = 0;
for(; i < process.argv.length; i++){
    sum += Number(process.argv[i]);
}

console.log(sum);