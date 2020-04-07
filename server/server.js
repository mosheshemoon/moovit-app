const express = require('express')
const app = express()
const fs = require('fs');

app.get('/getData', function (req, res) {
    let rawData = fs.readFileSync('./assets/data.json');
    let student = JSON.parse(rawData);
    res.send(student)
});

app.listen(3000)