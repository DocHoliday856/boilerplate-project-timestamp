const express = require("express");
const app = express();

app.get('/api/:date?', function(req, res, next) {
    req.time = new Date().toString();
    next();
  }, function(req, res) {
    console.log(req.params.date);
    let _date = req.params.date ? new Date(req.params.date) : new Date();

    console.log(_date);

if (_date === null) {
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
