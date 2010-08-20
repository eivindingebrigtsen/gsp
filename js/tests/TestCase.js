$(function() {
  TestCase("Blog", {
    setup: function() {
			var something = false;
    },    
    testFunction:function(){
			var result = $.addNumbers(2,3)
      assertEquals('2 + 3 = ', 5, result);
    },
		testFunction2: function(){
			var result = $.addNumbers(2,2)
      assertEquals('2 + 2 = ', 4, result);
			
		}
		
  });
});
