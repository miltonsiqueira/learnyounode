var filterFn = require("./filterfn.js"),
    directory = process.argv[2],
    filter = process.argv[3];

filterFn(directory, filter, function(err, data){
    if(err){
        return console.error("There was a error:", err);
    }else{
        data.forEach(function(item){
            console.log(item);
        });
    }
});
