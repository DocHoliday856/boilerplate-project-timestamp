// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get("/api/:date?", function(req, res) {
    let dateString = req.params.date ? req.params.date.replace(" ", "-") : null;
    let _date = dateString ? (new Date(dateString.includes("-") ? dateString : parseInt(dateString))) : new Date();

  if (_date.toUTCString() === "Invalid Date") {
        res.json({
            "error": "Invalid Date"
        });
    } else {
        res.json({
            "unix": _date.getTime(),
            "utc": _date.toUTCString()
        });
    }
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
