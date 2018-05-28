var ans=1;

$(".q1").hide();
$(".q2").hide();
$(".q3").hide();
$("#q2a")
$('#gender').hide();
$("#startb").click(function(){
	$("#startb").hide();
	$(".q1").fadeIn();
	$(".q1").animate({left:'160px'});
})
$('#q1a').click(function(){
    $(".q1").fadeOut();
	$("#q1a").fadeOut();
	$("#q1b").fadeOut();
	$("#q1c").fadeOut();
	$(".q2").fadeIn();
	$(".q2").animate({left:'160px'});
	ans *= 10;
	ans += 1;
})
$('#q1b').click(function(){
	$(".q1").fadeOut();
	$("#q1a").fadeOut();
	$("#q1b").fadeOut();
	$("#q1c").fadeOut();
	$(".q2").fadeIn();
	$(".q2").animate({left:'160px'});
	ans *= 10;
	ans += 2;
})
$('#q1c').click(function(){
	$(".q1").fadeOut();
	$("#q1a").fadeOut();
	$("#q1b").fadeOut();
	$("#q1c").fadeOut();
	$(".q2").fadeIn();
	$(".q2").animate({left:'160px'});
	ans *= 10;
	ans += 3;
})

var age=$('#age').val();
$('#q2b').click(function(){
	 $(".q2").fadeOut();
	 $("#q2a").fadeOut();
	 $("#q2b").fadeOut();
	 $(".q3").fadeIn();
	 $(".q3").animate({left:'100px'});
	 ans *= 100;
	 ans += age;
    }
)

$('#q3a').click(function(){
    $(".q3").fadeOut();
	$("#q3a").fadeOut();
	$("#q3b").fadeOut();
	$(".q4").fadeIn();
	$(".q4").animate({left:'160px'});
	ans *= 10;
	ans += 1;
})
$('#q3b').click(function(){
	$(".q3").fadeOut();
	$("#q3a").fadeOut();
	$("#q3b").fadeOut();
	$(".q4").fadeIn();
	$(".q4").animate({left:'160px'});
	ans *= 10;
	ans += 2;
})
