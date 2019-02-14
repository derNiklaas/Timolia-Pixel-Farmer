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
            console.log(body);
        }
        if (wait){
            setTimeout(dailyRequest, 86400000);
        }
    })
}
