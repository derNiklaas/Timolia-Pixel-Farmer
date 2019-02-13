const request = require('request');
dailyRequest();

function dailyRequest() {
    request.post("https://www.timolia.de/api/dailypixel", {form: {user: '[USERNAME]'}}, function (err, httpResponse, body) {
        if (err) {
            console.log("ERROR: " + err);
        } else {
            console.log(body);
        }

        setTimeout(dailyRequest, 86400000);
    })
}