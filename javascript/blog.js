let blogs;

$(function(){
	showBlog("#blogContent","new");
});


fetch("https://oroarmor.github.io/blog/blogIndex.json").then(response => {
  return response.json();
}).then(data => {
  // Work with JSON data here
  blogs = data;
}).then({
	alert(blogs.blogs[0].title);
})
.catch(err => {
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
        newestDate = blogDate;
      }
    }
    blog = info.blogs[newestBlog];
  }

  let blogDiv = $(container);
  let tempDiv = $("<div></div>").clone();
  tempDiv.append($("<h4></h4>").clone().text(blog.title));
  fetch(blog.text).then(response => {
    return response.text();
  }).then(data => {
    return data;
  }).then(blogText => {
    let pTag = $("<p></p>").clone().text(blogText);
    tempDiv.append(pTag);
  }).catch(err =>{
	   let pTag = $("<p></p>").clone().text("Error finding data");
	   tempDiv.append(pTag);
  });
  blogDiv.append(tempDiv);
};


//let testBlog = new Blog(blogs.blogs[0]);

class Blog{
	
	constructor(jsonData){
		alert("start");
		
		this.id = jsonData.id;
		this.json = jsonData;
		this.title = jsonData.title;
		this.txtFilePath = jsonData.text;
		this.images = jsonData.images;
		this.text = getText(this.txtFilePath);
		
		alert(this.text);
	}
	
	getText(textPath){
		return fetch(textPath)
		.then(response => {
		    return response.text();
		  }).then(data => {
		    return data;
		  }).catch(err => {
			  return "not found";
		  });
	}
}