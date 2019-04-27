let hidden = false;

$(document).ready(function() {
	$(".dropdownItem:not(#hideDrop)").click(function() {
		let href = $(this).children("a").attr('href');

		location.replace($(this).children("a").attr('href'));
	});
	
	$('#hideDrop').click(function(){
		$('.dropdownItem:not(#hideDrop)').css("display",(hidden)?"initial":"none");
		$("#downImg").attr("src","arrow"+((hidden)?"":"Down") + ".png");
		$("#dropdown").toggleClass("dropdownUp");
		hidden = !hidden;
	});
	
	$(window).resize(function(){
		if($(window).width() > 1000){
			$('.dropdownItem:not(#hideDrop)').css("display","inline");
		}
	  });
});

let blogInfo = "null";

let alert = true;

fetch("https://oroarmor.github.io/blog/blogIndex.json")
.then(function(a) {
    if (200 !== a.status) {
        alert("Looks like there was a problem. Status Code: " + a.status);
        return;
    }
    a.text().then(function(a) {
    	blogInfo = a;
    	//if(alert){
    	alert("json time");
    	
        alert(blogInfo);
//        alert(blogInfo.json());
    	//}
    });
})
.catch(function(a) {
    // alert("Fetch Error :-S", a);
});