let blogs;
let blogObjs;

whenLoaded = () => {
  fetch("https://oroarmor.github.io/blog/blogIndex.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      blogs = data.blogs;
    })
    .then(() => {
      blogObjs = [];
      for (blog in blogs) {
        blogObjs.push(new Blog(blogs[blog]));
      }

      let splitURL = location.href.split("?");
      console.log(splitURL);
      
      if (splitURL[1].substring(0, 5) == "blog=") {
        let found = false;
        for (let i = 0; i < blogObjs.length; i++) {
          if (blogObjs[i].id == splitURL[1].substring(5)) {
            blogObjs[i].addBlogTo("#blogs", {
              class: "blog",
            });
            found = true;
            break;
          }
        }

        if (!found) {
          $("#blogs").append("<p>The requested blog was not found</p>");
          $("#prev").css("display", "none");
          $("#next").css("display", "none");
        }else{
	        $("#prev").attr("href", "?blog=" + ((splitURL[1].substring(5) > 0 && found) ? (splitURL[1].substring(5) - 1) : splitURL[1].substring(5)));
	        $("#next").attr("href", "?blog=" + ((splitURL[1].substring(5) < blogObjs.length - 1 && found) ? (parseInt(splitURL[1].substring(5)) + 1) : splitURL[1].substring(5)));
        }
      }else if(splitURL[1].substring(0,10)=="blogStart="){
    	  if(splitURL[2].substring(0,8) == "blogEnd="){
	    	  let start = parseInt(splitURL[1].substring(10));
	    	  let end = parseInt(splitURL[2].substring(8));
	    	  
	    	  for (let i = 0; i < blogObjs.length; i++) {
	              if (blogObjs[i].id <= end && blogObjs[i].id >= start) {
	                blogObjs[i].addBlogTo("#blogs", {
	                  class: "blog",
	                  style: "order:"+(i*1)
	                });
	              }
	            }
	    	  
//	    	  alert(start+" "+end);
	      }
      }
      console.log("Finished");
    })
    .catch(err => {
      let errorMessage = "Failed to get blogs. " + err;
      $("#main").append("<p>" + errorMessage + "</p>");
    });
};
