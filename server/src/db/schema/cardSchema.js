const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Types = ['doacao', 'aviso','venda', 'reserva']

const CardSchema = new Schema({
  type:{
    type: String,
    enum: Types,
    required: true,

  },
  title: {
    type: String,
    required: true,
   
  },
  description: {
    type: String,
    required: false,
  },
  body: {
    type: String,
    required: true,
  },
  _userId: {
    type: String,
    required: true,
  },
  imgPath:{
    type: String,
    required: false,
    }  
});


module.exports = CardSchema;