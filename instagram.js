



var galleryFeed = new Instafeed({
  get: "user",
  userId: ,
  accessToken: "",

  useHttp: "true",
  limit: 8,
  
  after: function() {
    // disable button if no more results to load
    if (!this.hasNext()) {
      btnInstafeedLoad.setAttribute('disabled', 'disabled');
    }
  },
});
galleryFeed.run();



window.onload= function (){

var btnInstafeedLoad = document.getElementById("loadmore");
btnInstafeedLoad.addEventListener("click", function() {
  galleryFeed.next()
});
	}
