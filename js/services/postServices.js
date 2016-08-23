modules.exports = function(app){

  app.factory('PostServices',[function(){
    var p = {
      posts:[]
    };
    return p;
  }]);
};
