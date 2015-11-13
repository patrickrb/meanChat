/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Message = require('./message.model');
var User = require('../user/user.model');
exports.register = function(socket) {
  Message.schema.post('save', function (doc) {
  	  //lookup and attach user data to socket emission
	  User.findById(doc.userId, function (err, user) {
	    doc.userId = user
    	onSave(socket, doc);
	  });
  });
  Message.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('message:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('message:remove', doc);
}