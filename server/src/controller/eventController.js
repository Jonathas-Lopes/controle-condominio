const res = require('express/lib/response');
const mongoose = require('mongoose');
const EventSchema = require('../db/schema/eventSchema');

const EventModel = mongoose.model('event', EventSchema);


const event = {

  async listEvents(_id) {
    if(type){
      return EventModel.find({_id:_id})
    }
    return EventModel.find({})
  },
  async insertEvent(eventObj) {
    try {
      EventModel.insertMany(eventObj)
    } catch (error) {
      res.send(
        {
          "statusCode": 500,
          "error": "internal error"
        })
    }
    
   },
  async deleteEvent(_id) {
    try {
      return EventModel.deleteOne({_id})
      
    } catch (error) {
      res.send(
        {
          "statusCode": 500,
          "error": "internal error"
        })
      
    }
    
    
    
  },
  EventModel,

};

module.exports = event;
