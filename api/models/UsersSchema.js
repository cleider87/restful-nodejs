'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  dni: {
    type: String,
    required: 'Debe ingresar el DNI'
  },
  firstname: {
    type: String,
    required: 'Debe ingresar el nombre'
  },
  lastname: {
    type: String,
    required: 'Debe ingresar el apellido'
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});
module.exports = mongoose.model('User',UserSchema);
