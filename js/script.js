$(document).ready(function(){
    loopcounter('second-counter');
});


$(document).ready(function() {
  
	var nice = $("html").niceScroll();  // The document page (body)
	
	$("#div1").html($("#div1").html()+' '+nice.version);
    
    // $("#boxscroll").niceScroll({cursorborder:"",cursorcolor:"#00F",boxzoom:true}); 

    $(".boxscroll2").niceScroll(".contentscroll2",{cursorcolor:"#F00",cursoropacitymax:0.7,boxzoom:true,touchbehavior:false}); 
     
    
  });



