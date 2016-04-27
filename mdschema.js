(function() {
  "use strict";
  const util = require('util');
  const mongoose = require('mongoose');
  var Schema = mongoose.Schema;


var csvSchema = new Schema({
  "name": {
            type: String,
            unique: true
        },
  "text": String
});

})();