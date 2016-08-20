'use strict';

angular.module('starter.controllers', ['ionic', 'starter.services'])
  .controller('LoginCtrl', function($localStorage, $cordovaOauth, $location) {
    var vm = this;
    //This method is executed when the user press the "Login with facebook" button
    vm.facebookSignIn = function() {
      $cordovaOauth.facebook('289987271369461', ['email', 'read_stream', 'user_website', 'user_location', 'user_relationships']).then(function(result) {
          $localStorage.accessToken = result.access_token;
          $location.path("/home");
      }, function(error) {
          FB.login(function(response){
            console.log(response);
  // Handle the response object, like in statusChangeCallback() in our demo
  // code.
});
      });
    };
  });