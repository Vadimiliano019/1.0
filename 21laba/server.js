const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/calculate', function(req, res) {
    var number = parseFloat(req.query.number);
    var square = Math.pow(number, 2);

    res.json({ square: square });
});

app.listen(3000, function() {
    console.log('Server listening on port 3000');
});
