'use strict';

describe('Service: messages', function () {

  // load the service's module
  beforeEach(module('meanChatApp'));

  // instantiate service
  var messages;
  beforeEach(inject(function (_messages_) {
    messages = _messages_;
  }));

  it('should do something', function () {
  });

});
