const express = require("express");
const app = express();

app.get('api/:date?', function(req, res) {
    let _date = req.params.date ? new Date(req.params.date) : new Date();

    if (_date == null) {
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
