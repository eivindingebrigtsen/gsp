$(function() {
  TestCase("Blog", {
    setup: function() {
      var blog = 1,
          posts = 100;
    },    
    testFunction:function(){
      var result = blog*posts;
      assertEquals('100 posts per blog', 100, result);
    }
  });
});
