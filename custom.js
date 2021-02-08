$(document).ready(function(){
	$(".portfolio article").hide().append('<a href="#close" class="close"><img src="images/close.png"></a>');
	$(".portfolio li a").click(function(){
		$(".portfolio article").hide();
		ref = $(this).attr("href");
		$(ref).show();
	});
	$(".close").click(function(){
		$(".portfolio article").hide();
	});
});