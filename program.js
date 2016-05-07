var fs = require("fs"),
    path = require("path");

fs.readdir(process.argv[2],function(err, files){
    
    if(err){
        console.log(err);
    }else{
        var filter = process.argv[3]

        if(filter){
            filter = "." + filter.toLowerCase();
        }
        
        files.forEach(function(file){
            
            if(!filter || path.extname(file) === filter){
                console.log(file);
            }            
        });
    }
    
});