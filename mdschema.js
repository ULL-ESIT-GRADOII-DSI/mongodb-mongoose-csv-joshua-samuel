(function() {
  "use strict";
  const util = require('util');
  const mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost/data');
  var Schema = mongoose.Schema;


var csvSchema = new Schema({
  id:  Number,
  text: String
});


const Card=mongoose.model("Card",csvSchema);

let c1=new Card({"id":1,"text":"Probando"});

let p1=c1.save(function(err){
   if (err) { console.log(`Hubieron errores salvando ${n}:\n${err}`); return err; }
});

Promise.all([p1]).then( (value) => { 
    console.log(util.inspect(value, {depth: null}));  
    mongoose.connection.close(); 
  });
})();