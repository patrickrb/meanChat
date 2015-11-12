'use strict';

angular.module('meanChatApp')
  .config(function ($stateProvider) {
    $stateProvider
	    .state('main', {
	        url: '/',
	        views: {
	            'main': {
	                templateUrl: 'app/main/main.html',
	                controller: 'MainCtrl'
	            },
	            'navBar@main': {
	                templateUrl: 'components/navbar/navbar.html',
	                controller: 'NavbarCtrl'
	            },
	            'content@main': {
	            	templateUrl: 'app/chat/chat.html'
	            }
	        },
	        resolve: {
	            init: function($stateParams, messageService) {
	                return messageService.init()
	                    .then(function() {
	                        //ready to fire next service
	                    });
	            }
	        }
		});
  });