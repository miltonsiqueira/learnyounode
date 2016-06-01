module.exports = function (directory, filter, callback){
    var fs = require("fs"),
        path = require("path"),
        data = [];

    fs.readdir(directory, function(err, files){
    
        if(err){
            callback(err);
        }else{

            if(filter){
                filter = "." + filter.toLowerCase();
            }
        
            files.forEach(function(file){
            
                if(!filter || path.extname(file) === filter){
                    data.push(file);
                }            
            });

	   callback(null, data);
        }
    
    });
}
