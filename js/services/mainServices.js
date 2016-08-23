modules.exports = function(app){

  app.factory('MainServices',[function(){
    var p = {
      posts:[]
    };
    return p;
  }]);
};
