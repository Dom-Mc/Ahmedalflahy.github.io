$(document).ready(function(){
	$("#show").hover(function(){
		$("#bq1").slideDown();
	})
	$("#show").hover(function(){
		$("#bq2").slideDown();
	})
	$("#show").hover(function(){
		$("#bq3").slideDown();
	})
	$("#bq1").click(function(){
		$("#div1").fadeToggle();
	})
	$("#bq2").click(function(){
		$("#div2").fadeToggle();
	})
	$("#bq3").click(function(){
		$("#div3").fadeToggle();
	})
})