let blogs;

fetch("./blog/blogIndex.json").then(response => {
    return response.json();
  }).then(data => {
    blogs = data;
  }).then(() => {
    let testBlog = new Blog(blogs.blogs[0]);
    testBlog.addBlogTo("#main", {
      class: "content"
    });

		let testBlog2 = new Blog(blogs.blogs[1]);
    testBlog2.addBlogTo("#blogContent", {id:"newestBlog"});
  })
  .catch(err => {
    console.log(err);
});

class Blog {
  constructor(jsonData) {
    this.id = jsonData.id;
    this.json = jsonData;
    this.title = jsonData.title;
    this.txtFilePath = jsonData.text;
    this.images = jsonData.images;
  }

  async getText(textPath) {
    let textRequest = await fetch(textPath);
    let text = await textRequest.text();
    return text;
  }

  async createHTMLBlog(divModifiers) {
    return this.getText(this.txtFilePath).then(result => {
      let tempDiv = $("<div></div>", divModifiers);
      tempDiv.append($("<h4></h4>").text(this.title));
      let pTag = $("<p></p>").text(result);
      tempDiv.append(pTag);
      return tempDiv;
    });
  }

  addBlogTo(parentElement, divModifiers) {
    this.createHTMLBlog(divModifiers).then(newDiv => {
      $(parentElement).append(newDiv);
    });
  }
}
