'use strict';

angular.module('starter.controllers', ['ionic', 'starter.services'])
  .controller('HomeCtrl', function(UserService, $ionicActionSheet, $state, $ionicLoading, $http, $localStorage){
    var vm = this;
    vm.user = UserService.getUser();

    vm.showLogOutMenu = function() {
      $ionicActionSheet.show({
        destructiveText: 'Logout',
        titleText: 'Are you sure you want to logout? This app is awsome so I recommend you to stay.',
        cancelText: 'Cancel',
        cancel: function() {},
        buttonClicked: function() {
          return true;
        },
        destructiveButtonClicked: function(){
          $ionicLoading.show({
            template: 'Logging out...'
          });
          // Facebook logout
   
        }
      });
    };
    vm.init = function() {
        if($localStorage.hasOwnProperty("accessToken") === true) {
            $http.get('https://graph.facebook.com/v2.2/me', { params: { access_token: $localStorage.accessToken, fields: 'id,name,gender,location,website,picture,relationship_status', format: 'json' }}).then(function(result) {
                vm.profileData = result.data;
            }, function(error) {
                alert('There was a problem getting your profile.  Check the logs for details.');
                console.log(error);
            });
        } else {
            alert('Not signed in');
            $location.path('/login');
        }
    };
});