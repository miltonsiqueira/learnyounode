var http = require("http");

http.get(process.argv[2], function(response){
        var msg = "";
        response.setEncoding("utf8");
        response.on("error", console.error);
        response.on("data", function(data){
            msg += data;
        });
        response.on("end", function(){
            console.log(msg.length);
            console.log(msg);
        });
    }).on("error", console.error);
