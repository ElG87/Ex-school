
$(document).ready(function(){
	$("#blogload").load("eenvoudig.html .artikelen");
});

$(function() {
	$("#blog1").on("click", function() {
		$("#blogload").load("eenvoudig.html #blogdiv1")
	});
	
	$("#blog2").on("click", function() {
		$("#blogload").load("eenvoudig.html #blogdiv2")
	});
	
	$("#blog3").on("click", function() {
		$("#blogload").load("eenvoudig.html #blogdiv3")
	});
	
	$("#blog4").on("click", function() {
		$("#blogload").load("eenvoudig.html #blogdiv4")
	});

	$("#blog5").on("click", function() {
		$("#blogload").load("eenvoudig.html #blogdiv5")
	});
})

$(function() {
	var state = true;
	$(".submit").on("click", function() {
		if (state) {
			$("#effect").animate({
				backgroundColor: "rgb(234, 197, 179)",
				color: "#fff",
				width: 750
			}, 1000 );
		} else {
			$("#effect").animate({
				backgroundColor: "#fff",
				color: "#000",
			}, 1000 );
		}
		state = !state;
	});
});
