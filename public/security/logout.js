angular.module('app').component('logout', function($location, auth) {
  auth.logout();
  
  $location.path('/login');
});