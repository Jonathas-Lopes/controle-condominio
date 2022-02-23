const res = require('express/lib/response');
const mongoose = require('mongoose');
const CardSchema = require('../db/schema/cardSchema');

const CardModel = mongoose.model('card', CardSchema);


const card = {

  async listCards(type) {
    if(type){
      return CardModel.find({type:type})
    }
    return CardModel.find({})
  },
  async insertCard(cardObj) {
    try {
      CardModel.insertMany(cardObj)
    } catch (error) {
      res.send(
        {
          "statusCode": 500,
          "error": "internal error"
        })
    }
    
   },
  async deleteCard(_id) {
    try {
      return CardModel.deleteOne({_id})
      
    } catch (error) {
      res.send(
        {
          "statusCode": 500,
          "error": "internal error"
        })
      
    }
    
    
    
  },
  CardModel,

};

module.exports = card;
