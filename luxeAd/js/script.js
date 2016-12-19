$(window).load(function() { 
	$(".loaderInner").fadeOut(); 

	$(".loader").delay(400).fadeOut("slow"); 
});

$(document).ready(function(){

	var mixer = mixitup('.portfolio_container');

	//PORTFOLIO active classes
	$(".portfolio_nav li").click(function(){
		$(".portfolio_nav li").removeClass("active");
		$(this).addClass("active");
	});


	$('.carousel').carousel();




//sandwich menu

	var browserMinWidth = parseInt($('.container').css('max-width'));
	if (browserMinWidth < 980) {
			//toggle menu
			$(".top_menu ul a").click(function(){
				$(".top_menu").fadeOut(600);
				$(".sandwich").toggleClass("active");
			}).append("<span>");
        }
        $(".toggle_menu").click(function() {
		  $(".sandwich").toggleClass("active");
		});
	        $(".toggle_menu").click(function(){
		if ($(".top_menu").is(":visible")){
			$(".top_menu").fadeOut(600);
			$(".top_menu li a").removeClass("fadeInUp animated");
		}else{
			$(".top_menu").fadeIn(600);
			$(".top_menu li a").addClass("fadeInUp animated");
		}
	});
});