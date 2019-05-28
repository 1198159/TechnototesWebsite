let hidden = false;

$(document).ready(function() {
  $(".dropdownItem:not(#hideDrop)").click(function() {
    location.replace($(this).children("a").attr('href'));
  });

  $('#hideDrop').click(function() {
    $('.dropdownItem:not(#hideDrop)').css("display", (hidden) ? "initial" : "none");
    $("#downImg").attr("src", "https://oroarmor.github.io/images/arrow" + ((hidden) ? "" : "Down") + ".png");
    $("#dropdown").toggleClass("dropdownUp");
    hidden = !hidden;
  });

  $(window).resize(function() {
    if ($(window).width() > 1200) {
      $('.dropdownItem:not(#hideDrop)').css("display", "inline");
    }
  });
});
