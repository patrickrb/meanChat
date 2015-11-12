'use strict';

describe('Directive: chatWindow', function () {

  // load the directive's module and view
  beforeEach(module('meanChatApp'));
  beforeEach(module('components/chatWindow/chatWindow.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<chat-window></chat-window>');
    element = $compile(element)(scope);
    scope.$apply();
  }));
});
