'use strict';

angular.module('meanChatApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.messages = [];

    $http.get('/api/messages').success(function(awesomeThings) {
      $scope.messages = awesomeThings;
      socket.syncUpdates('message', $scope.messages);
    });

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('message');
    });
  });
