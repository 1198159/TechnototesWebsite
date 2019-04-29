let hidden = false;

$(document).ready(function() {
  $(".dropdownItem:not(#hideDrop)").click(function() {
    let href = $(this).children("a").attr('href');

    location.replace($(this).children("a").attr('href'));
  });

  $('#hideDrop').click(function() {
    $('.dropdownItem:not(#hideDrop)').css("display", (hidden) ? "initial" : "none");
    $("#downImg").attr("src", "./images/arrow" + ((hidden) ? "" : "Down") + ".png");
    $("#dropdown").toggleClass("dropdownUp");
    hidden = !hidden;
  });

  $(window).resize(function() {
    if ($(window).width() > 1000) {
      $('.dropdownItem:not(#hideDrop)').css("display", "inline");
    }
  });
});