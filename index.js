const request = require('request');
if (process.argv.length > 2 && process.argv[2] === 'nowait'){
    dailyRequest(false);
}else{
    dailyRequest(true);
}

function dailyRequest(wait) {
    request.post("https://www.timolia.de/api/dailypixel", {form: {user: '[USERNAME]'}}, function (err, httpResponse, body) {
        if (err) {
            console.log("ERROR: " + err);
        } else {
            if(body.startsWith("{")){
                let json = JSON.parse(body);
                if(json.status === "failed"){
                    console.log("\x1b[31m", "Request Failed.");
                    return;
                }else{
                    console.log("\x1b[32m", "Request Succeeded. +"+json.pixel+" Pixel");
                }
            }else{
                console.log("\x1b[31m", "Unknown Username. Please check your Username!");
            }
        }
        if (wait){
            setTimeout(dailyRequest, 86400000);
        }
    })
}
