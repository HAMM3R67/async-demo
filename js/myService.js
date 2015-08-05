var app = angular.module('chatroom');

app.service('myService', function($http, $q){
  
  console.log('hello from service');

});


var xhr = new XMLHttpRequest();
xhr.open("GET", 'http://reqr.es/api/products/5', true);
xhr.onload = function() {
  console.log(xhr.responseText)
};
xhr.send();

// http://deckofcardsapi.com/api/deck/new/draw/?count=52