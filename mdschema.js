(function() {
  "use strict";
  const util = require('util');
  const mongoose = require('mongoose');
  var Schema = mongoose.Schema;


var SchemaFichero = new Schema({
  "name": {
            type: String,
            unique: true
        },
  "text": String
});

    const Fichero = mongoose.model("Fichero", SchemaFichero);
    /*Creamos los tres ejemplos iniciales*/
    let fichero1 = new Fichero({
        "name": "Fichero1.csv",
        "content": `"producto",           "precio"
                    "camisa",             "4,3"
                    "libro de O\\"Reilly", "7,2"`
    });
    let fichero2 = new Fichero({
        "name": "Fichero2.csv",
        "content": `"producto",           "precio"  "fecha"
                    "camisa",             "4,3",    "14/01"
                    "libro de O\\"Reilly", "7,2"     "13/02"`
    });
    let fichero3 = new Fichero({
        "name": "Fichero3.csv",
        "content": `"edad",  "sueldo",  "peso"
                    ,         "6000€",  "90Kg"
                    47,       "3000€",  "100Kg"`

    });

    /*Añadimos los ejemplos a la BD*/
    let promise1 = fichero1.save(function(err) {
        if (err) {
            console.log(`Hubieron errores:\n${err}`);
            return err;
        }
        console.log(`Guardado: ${fichero1}`);
    });

    let promise2 = fichero2.save(function(err) {
        if (err) {
            console.log(`Hubieron errores:\n${err}`);
            return err;
        }
        console.log(`Guardado: ${fichero2}`);
    });

    let promise3 = fichero3.save(function(err) {
        if (err) {
            console.log(`Hubieron errores:\n${err}`);
            return err;
        }
        console.log(`Guardado: ${fichero3}`);
    });

    /*Esperamos a que se creen los ejemplos*/
    Promise.all([promise1, promise2, promise3]).then((value) => {
        console.log("Se han creado las entradas:\n" + util.inspect(value, {
            depth: null
        }));
    }, (reason) => {
        console.log("No se han podido crear las entradas:\n" + reason);
    });

    module.exports = Fichero;
  
})();