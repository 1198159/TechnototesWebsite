let blogs;


fetch('./blog/blogIndex.json').then(response => {
  return response.json();
}).then(data => {
  // Work with JSON data here
  blogs = data;
}).catch(err => {
  console.log(err);
});

let showBlog = (container, info, what) => {
  let blog;

  if(what == null){
	  what = info;
	  info = blogs;
  }
  
  
  if (what == "new") {
    let newestDate = new Date(1970);
    let newestBlog = -1;
    for (let infoBlog in info.blogs) {
      let blogDate = new Date(info.blogs[infoBlog].date);
      if (blogDate - newestDate > 0) {
        newestBlog = infoBlog;
      }
      let newestDate = blogDate;
    }
    blog = info.blogs[newestBlog];
  }

  let blogDiv = $(container);
  blogDiv.append($("h3").clone().text(blog.title));
  fetch(blog.text).then(response => {
    return response.text();
  }).then(data => {
    return data;
  }).then(blogText => {
    let pTag = $("p").clone().text(blogText);
    $(container).append(pTag);
  });
};