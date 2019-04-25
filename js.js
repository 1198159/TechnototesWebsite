$(document).ready(function() {
	$('.dropdownItem').click(function() {
		location.replace($(this).text().toLowerCase() + ".html");
	});
	
});

var blogInfo;

fetch("./blog/blogIndex.txt").then(function(a) {
    if (200 !== a.status) {
        alert("Looks like there was a problem. Status Code: " + a.status);
        return;
    }
    a.text().then(function(a) {
    	blogInfo = JSON.parse(a);
        alert(blogInfo);
    });
}).catch(function(a) {
    alert("Fetch Error :-S", a);
});
