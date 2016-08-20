'use strict';

angular.module('starter.services', [])
.service('UserService', function() {
  // For the purpose of this example I will store user data on ionic local storage but you should save it on a database
  var setUser = function(userData) {
    window.localStorage.starterFacebookUser = JSON.stringify(userData);
  };

  var getUser = function(){
    return JSON.parse(window.localStorage.starterFacebookUser || '{}');
  };

  return {
    getUser: getUser,
    setUser: setUser
  };
});


