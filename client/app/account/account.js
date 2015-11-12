'use strict';

angular.module('meanChatApp')
  .config(function ($stateProvider) {
    $stateProvider
    .state('main.login', {
        url: 'login',
        views: {
            'content': {
                templateUrl: 'app/account/login/login.html',
                controller: 'LoginCtrl'
            }
        }
      })
      .state('main.signup', {
        url: 'signup',
        views: {
            'content': {
              templateUrl: 'app/account/signup/signup.html',
              controller: 'SignupCtrl'
            }
          }
      })
      .state('main.settings', {
        url: 'settings',
        views: {
          'content': {
            templateUrl: 'app/account/settings/settings.html',
            controller: 'SettingsCtrl',
          }
        },
        authenticate: true
      });
  });