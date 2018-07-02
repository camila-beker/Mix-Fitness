$(".btn-menu").click(function(){
	$(".menu").show();
});

$(".btn-close").click(function(){
	$(".menu").hide();
});

$("a").click(function(){
	if($(window).width() <= 425){
		$(".menu").hide();
	}
	
});

$(window).on("scroll", function(){
	if($(window).scrollTop() > 100){
		$(".menu").addClass("menu-color");
	} else {
		$(".menu").removeClass("menu-color");
	}
});