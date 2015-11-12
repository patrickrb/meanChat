'use strict';

angular.module('meanChatApp')
  .directive('chatWindow', function (messageService) {
    return {
      templateUrl: 'components/chatWindow/chatWindow.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      	console.log('message service: ', messageService);
      }
    };
  });
