'use strict';

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [
  'ionic',
  'starter.controllers',
  'starter.services',
  'ui.router',
  'ngCordova',
  'ngCordovaOauth',
  'ngStorage'
])

.run(function($ionicPlatform, $cordovaKeyboard, $cordovaStatusbar) {
  $ionicPlatform.ready(function() {
    if (typeof $cordovaKeyboard.hideKeyboardAccessoryBar === 'undefined' || typeof $cordovaStatusbar.styleDefault === 'undefined') {
      return;
    }
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    $cordovaKeyboard.hideKeyboardAccessoryBar(true);

    // Don't remove this line unless you know what you are doing. It stops the viewport
    // from snapping when text inputs are focused. Ionic handles this internally for
    // a much nicer keyboard experience.
    $cordovaKeyboard.disableScroll(true);
    $cordovaStatusbar.styleDefault();
  });
})

.config(function($stateProvider, $urlRouterProvider){
  
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/login');
  //
  // Now set up the states
  $stateProvider
    .state('login', {
      url: '/login',
      controller: 'LoginCtrl',
      controllerAs: 'login',
      templateUrl: 'templates/login.tpl.html'
    })
    .state('home', {
      url: '/home',
      controller: 'HomeCtrl',
      controllerAs: 'home',
      templateUrl: 'templates/home.tpl.html'
    });
   
});
