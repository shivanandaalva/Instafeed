



var galleryFeed = new Instafeed({
  get: "user",
  userId: 3723311028,
  accessToken: "3723311028.1677ed0.de6362e6340a4dceba5fb041399e1b25",

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