const mongoose = require('mongoose');

const { Schema } = mongoose;

const Pecas = new Schema({
   Nome: {
      type: String,
      require: true,
   },

   Preco: {
      type: Number,
      require: true,
   },

   Infos: {
      type: String,
      require: true
   }

});

module.exports = mongoose.model('Pecas', Pecas)
