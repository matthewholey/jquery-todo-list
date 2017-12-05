// on event (first character) create next li with input
// onclick checkbox cross off aligned li
$();
// on the first keypress in listHere // letters < 2?

	// $('.listHere').on('keypress', '.listHere', function() {
	// 	console.log("keypressed");
	// });
$(document).ready(function() {
	console.log("DOM Loaded");

	// $('li').hide(function() {
	// });

	// $('button').click(function() {
	// 	$('li').show(function() {
	// 	});
	// });

	$('.addItem').click(function() {
		$('<ul>').apend($('<li>', {
			text: $('.listHere').val()
		}));
	});

	// $('.checkBox').click(function() {
	// 	$('li').fadeOut('<li></li>');
	// });

	$('ul').sort(function() {
	});
});

// X for remove buttons