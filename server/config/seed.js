/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Message = require('../api/message/message.model');
var User = require('../api/user/user.model');
var mongoose = require('mongoose');

User.find({}).remove(function() {
  User.create({
    _id: '162e848ca5e2697c488f9258',
    provider: 'local',
    name: 'jigglebilly',
    email: 'burnsoft@gmail.com',
    password: 'monkey'
  },{
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Message.find({}).remove(function(){
  Message.create({
    userId: mongoose.Types.ObjectId('162e848ca5e2697c488f9258'),
    message: 'This is a seeded test message',
  }, function(){
    console.log('finished populating messages');
  })
})