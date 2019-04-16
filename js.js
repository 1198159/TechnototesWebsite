let dropdownUp = false;

$(document).ready(function() {

	$('#hide').click(function() {
		if (!dropdownUp) {
			$('#dropdown').css("display", "none");
		} else {
			$('#dropdown').css("display", "initial");
		}
		dropdownUp = !dropdownUp;
	});

});