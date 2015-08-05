var app = angular.module('chatroom');

app.controller('mainCtrl', function($scope, myService){
  
  console.log('hello from controller');
  
  $scope.shuffle = function() {
    myService.getData().then(function(results){
      console.log (results)
      $scope.cards = results.data.cards;
    });
  }
  
})
