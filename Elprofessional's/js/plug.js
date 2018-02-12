
/*global $,alert, console*/
$(document).ready( function(){
	'use strict';

	$(".navbar-inverse .navbar-collapse ul li a").click(function() {
		$(this).parent().addClass("active").siblings().removeClass("active");
	});
	// scroll for features
	$(".header .arrow i").click(function(){
		$("html , body").animate({
			scrollTop:$(".features").offset().top
		} , 1000);
	});
	//==================smooth scroll===============
	$(".navbar .links ul li a").click(function(){
		$("html , body").animate({
			scrollTop:$("#" + $(this).data("value")).offset().top
		} , 1100);
	});
//==============option-box=================//
		$(".gear-check").click(function(){
		$(".color-option").fadeToggle(1000);
});
	//change theme color for list
	var colorLi = $(".option-box .color-option ul li");
	colorLi 
	.eq(0).css("backgroundColor" , "#d7540d" ).end()
	.eq(1).css("backgroundColor" , "#032f9d" ).end()
	.eq(2).css("backgroundColor" , "#244f7a" ).end()
	.eq(3).css("backgroundColor" , "#26cfee" ).end()
	.eq(4).css("backgroundColor" , "#d0150b" ).end()
	.eq(5).css("backgroundColor" , "#b113af" ).end()

	colorLi.click(function(){
		$("link[href*='theme']").attr("href" , $(this).attr("data-value"));
	});
///////////////////////////////////////////////////
//================FAQ Accordion====================//
$(".faq-question .panel-group .panel-heading i").click(function(){
	if($(".faq-question .panel-group .panel-heading a").hasClass("collapsed")){
		$(this).toggleClass("fa-minus");
	}
});
//================FAQ Accordion====================//
});
 		//start Scroll Top
	var scrollbutton = $("#scroll-top")

	$(window).scroll(function(){

		if($(this).scrollTop() >= 700)
		{
			scrollbutton.fadeIn(1000);
		}
		else
		{
			scrollbutton.fadeOut(1000);
		}
		
		//================Navbar Scroll================//
		  if ($(document).scrollTop() > 50)
		  {
		    $('nav').addClass('change-fixed-nav');
		  }
		  else
		  {
		    $('nav').removeClass('change-fixed-nav');
		  }
	});
		scrollbutton.click(function(){
		$("html , body").animate({ scrollTop : 0 } ,  500);
	});
//================Navbar Scroll================//
