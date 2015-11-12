'use strict';

angular.module('meanChatApp')
  .service('messageService', function ($q, messageFactory) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    class MessageService {
            constructor() {
                this.messages = {};
            }

            init() {
                return new $q(function(resolve, reject){
                    this.loading = true;
                    //this service is now trying to load data
                    messageFactory.find()
                        .then(function(messageData){
                            //assign the response to the service
                            this.messages = messageData;
                            console.log('got messages: ', messageData);
                            //done loading
                            this.loading = false;
                            this.errors = false;
                        }.bind(this))
                        .then(resolve)
                        .catch(function(e){
                            this.loading = false;
                            this.errors = true;
                            return reject(e);
                        }.bind(this))
                }.bind(this));
            }
        }
        return new MessageService;
  });