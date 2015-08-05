var app = angular.module('chatroom');

app.service('myService', function($http, $q){ //$q is a promise library; $http is an AJAX library that returns promises, it uses $q
  
  this.getData = function(){
    return $http.get('http://deckofcardsapi.com/api/deck/new/draw/?count=52')
    .then(function(data){
       return (data);
      })  
    }
});



// http://deckofcardsapi.com/api/deck/new/draw/?count=52