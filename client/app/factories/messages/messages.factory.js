'use strict';

angular.module('meanChatApp')
  .factory('messageFactory', function ($http) {
    class MessageFactory {
        find() {
            return $http.get('/api/messages')
                .then(x => {return x.data;});
        }

        findOne(messageId){
            return $http.get(`/api/messages/${messageId}`)
                .then(x => {return x.data.message;});
        }

        create(messageToCreate){
            return $http.post(`/api/messages`, messageToCreate)
                .then(x => {return x.data.message;});
        }

        update(messageId, updatedMessage){
            return $http.put(`/api/messages/${messageId}`, updatedMessage)
                .then(x => {return x.data.updated;});
        }

        remove(messageId){
            return $http.delete(`/api/messages/${messageId}`)
                .then(x => {return x.data;});
        }
    }
    return new MessageFactory;
  });