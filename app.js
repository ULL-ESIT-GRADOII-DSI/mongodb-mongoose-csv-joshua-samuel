"use strict";

const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');


app.set('port', (process.env.PORT || 5000));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.static(__dirname + '/public'));

const calculate = require('./models/calculate');

app.get('/', (request, response) => {
  response.render('index',{title: "CSV"});
});

app.get('/csv', (request, response) => {
  response.send({"rows" : calculate(request.query.textocsv)});
});

const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/data');

const fichero= require('./mdschema');

app.get('/ficheros/:entrada', function(req, res) {
    fichero.find({}, function(err, docs) {
        if (err)
            return err;
        if (docs.length >= 4) {
            fichero.find({ name: docs[3].name }).remove().exec();
        }
    });
    let fichent = new fichero({
        "name": req.params.entrada,
        "text": req.query.content
    });

    fichent.save(function(err) {
        if (err) {
            console.log(`Hubieron errores:\n${err}`);
            return err;
        }
        console.log(`Guardado: ${fichent}`);
    });
});

app.get('/descfich', function (request, response ){
  fichero.find({}, function(err,data){
    if(err)
      return err;
      response.send(data);
  });
});

app.get('/fichnombre', function(req, res) {
    fichero.find({
        name: req.query.name
    }, function(err, docs) {
        res.send(docs);
    });
});

app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});