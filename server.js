//server.js

var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var stringyFile;

app.use(bodyParser.json());

app.get('/getNote', function (req, res) {
    console.log('Otrzymałem żądanie GET');
    fs.readFile('./test.json', 'utf8', function(err, data) {
        if (err) throw err;
        stringifyFile = data
        res.send(data);
    });
});

app.post('/updateNote/:note', function(req, res) {
    console.log('Otrzymałem żądanie POST');
	stringifyFile += req.params.note;
	fs.writeFile('./test.json', stringifyFile, function(err) {
    if (err) throw err;
    console.log('File updated');
	});
});

app.listen(3000);

app.use(function (req, res, next) {
    res.status(404).send('Page not found!')
});