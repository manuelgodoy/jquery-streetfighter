$(document).ready(function() {
  $(".ryu").on("mouseenter", function(){
  	$(this).find(".ryu-still").hide();
  	$(this).find(".ryu-ready").show();  	
  });
   $(".ryu").on("mouseleave", function(){
  	$(this).find(".ryu-ready").hide();
  	$(this).find(".ryu-still").show();  	
  });
   $(".ryu").on("mousedown", function(){
   	playHadouken(); 
  	$(this).find(".ryu-ready").hide();
  	$(this).find(".ryu-throwing").show(); 
  	$(this).closest(".main").find(".hadouken").finish().show()
  	.animate({"left":"400px"},500,function() {
  		$(this).hide();
  		$(this).css("left", "-95px");
  	});	
  });
   $(".ryu").on("mouseup", function(){
  	$(this).find(".ryu-throwing").hide();
  	$(this).find(".ryu-ready").show();  	

  });

   $(document).keydown(function(e) {
   	if (e.keyCode == 88) {
   	$(".ryu-still").hide();
  	$(".ryu-ready").hide();
  	$(".ryu-cool").show();
  	return false;
   	}

   });

     $(document).keyup(function(e) {
   	if (e.keyCode == 88) {
   	 

   	$(".ryu-still").show();
  	$(".ryu-cool").hide();
  	return false;
   	}

   });
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}