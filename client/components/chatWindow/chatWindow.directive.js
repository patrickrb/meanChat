'use strict';

angular.module('meanChatApp')
  .directive('chatWindow', function (messageService, messageFactory, Auth) {
    return {
      templateUrl: 'components/chatWindow/chatWindow.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
    	scope.message;
      var currentUser = Auth.getCurrentUser();

      //get current user and set userid in the promise return only if the user is logged in
      if(currentUser.$promise){
        currentUser.$promise.then(function(data) {
            scope.userId = data._id;
        });
      }

    	scope.clear = function(){
    		scope.message = "";
    	}

      	scope.submitMessage = function(){
      		//if the user isnt logged in or if the message is blank, return false..will add error messages later
      		if((scope.userId === undefined) || (scope.message === undefined) || (scope.message === '')){
      			return false;
      		}

      		//setup our message object
      		var messageObject = {
      			userId: scope.userId,
      			message: scope.message
      		}

      		//call the message factory and submit it to the backend
      		messageFactory.create(messageObject);
      		//set the message model back to an empty string, clearing the user input
      		scope.message = ""; 
      	}
      }
    };
  });
