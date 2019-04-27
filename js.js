let hidden = false;

$(document).ready(function() {
  $(".dropdownItem:not(#hideDrop)").click(function() {
    let href = $(this).children("a").attr('href');

    location.replace($(this).children("a").attr('href'));
  });

  $('#hideDrop').click(function() {
    $('.dropdownItem:not(#hideDrop)').css("display", (hidden) ? "initial" : "none");
    $("#downImg").attr("src", "arrow" + ((hidden) ? "" : "Down") + ".png");
    $("#dropdown").toggleClass("dropdownUp");
    hidden = !hidden;
  });

  $(window).resize(function() {
    if ($(window).width() > 1000) {
      $('.dropdownItem:not(#hideDrop)').css("display", "inline");
    }
  });
});

let blogInfo = "null";

let alert = true;

fetch('./blog/blogIndex.json').then(response => {
  return response.json();
}).then(data => {
  // Work with JSON data here
  blogInfo = data;
  showBlog("blogContent", blogInfo, "new");
}).catch(err => {
  console.log(err);
});

let showBlog = (container, info, what) => {
  let blog;

  if (what == "new") {
    let newestDate = new Date(1970);
    let newestBlog = -1;
    for (let infoBlog in info.blogs) {
      let blogDate = new Date(info.blogs[infoBlog].date);
      if (blogDate - newestDate > 0) {
        newestBlog = infoBlog;
      }
    }
    blog = info.blogs[newestBlog];
  }

  let blogDiv = $(container);
  let header = $("h3").clone();
  header.text(blog.title)
  blogDiv.append(header);

  let blogText;

  fetch(blog.text).then(response => {
    return response.text();
  }).then(data => {
    console.log(data);
    blogText = data;
  });

  $(container).append("<p>" + blogText + "</p>");
};
