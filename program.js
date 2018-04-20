var http = require("http");
//console.log("process.argv " + process.argv);
var i = 2;


var callback = function (response) {
    var msg = "";
    response.setEncoding("utf8");
    response.on("error", console.error);
    response.on("data", function(data){
        msg += data;
    });
    response.on("end", function(){
        console.log(msg);
        if (i < 5) {
            i++;
            http.get(process.argv[i], callback).on("error", console.error);
        }
    });
};

http.get(process.argv[i], callback).on("error", console.error);
