modules.exports = function(app) {
    app.controller('PostCtrl', ['$scope', '$stateparams', 'posts', function($scope, $stateparams, posts) {
        $scope.post = posts.posts[$stateParams.id];//Grabbing the id from the URL
        $scope.posts.push({
            title: $scope.title,
            link: $scope.link,
            upvotes: 0,
            comments: [{
                        author: 'Joe',
                        body: 'Cool post!',
                        upvotes: 0
                        }, {
                          author: 'Bob',
                          body: 'Great idea but everything is wrong!',
                          upvotes: 0
                        }]
                  });

          $scope.addComment = function(){
                        if($scope.body === '') { return; }
                        $scope.post.comments.push({
                          body: $scope.body,
                          author: 'user',
                          upvotes: 0
                        });
                        $scope.body = '';
                      };
    }]);
}
