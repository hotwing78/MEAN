(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(app){
  app.controller('MainCtrl',['$scope',function($scope){
      $scope.test = 'Hello World!';
      $scope.posts = [
        {title: 'Post 1', upvotes: 5},
        {title: 'Post 2', upvotes: 2},
        {title: 'Post 3', upvotes: 15},
        {title: 'Post 4', upvotes: 9}
      ];
  }]);
}

},{}],2:[function(require,module,exports){
var app = angular.module('flapperNews', ['ui.router']);

require('./controllers/mainCtrl.js')(app);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/home.html',
                controller: 'MainCtrl'
            }).state('posts', {
                url: '/posts/{id}',
                templateUrl: '/posts.html',
                controller: 'PostsCtrl'
            });

        $urlRouterProvider.otherwise('home');
    }
]);

},{"./controllers/mainCtrl.js":1}]},{},[2])