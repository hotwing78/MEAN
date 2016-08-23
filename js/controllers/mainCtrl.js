module.exports = function(app){
  app.controller('MainCtrl',['$scope','PostServices',function($scope,PostServices){
      $scope.posts = PostServices.posts;
  }]);
}
