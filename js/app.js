$(document).ready(function(){
	$(".addItem").click(function(){
		var userInput = $("input.listHere").val();
		$(".list").append("<li><input type='checkbox'><button type='button' class='buttonX'>X</button>" + userInput + "</li>");
		$(".listHere").val("");
	});
	$(document).on("click",".buttonX", function(){
		$(this).parent("li").remove();
	});
});