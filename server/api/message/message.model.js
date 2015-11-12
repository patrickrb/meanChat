'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MessageSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true},
  message: {type: String, required: true},
  timeStamp: { type: Date, default: new Date().toISOString() }
});

module.exports = mongoose.model('Message', MessageSchema);