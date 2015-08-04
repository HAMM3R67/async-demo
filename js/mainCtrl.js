var app = angular.module('chatroom');

app.controller('mainCtrl', function($scope, myService){
  
  console.log('hello from controller');
  
  $scope.shuffle = function() {
    console.log('shuffling')
  }
  
})
