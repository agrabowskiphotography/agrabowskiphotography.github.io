var zoomedImage = document.getElementById("zoomedImage");
var zoomModal = document.getElementById("zoomModal");
var close = document.getElementsByClassName("close")[0];
var pics = document.querySelectorAll(".pic");
for (var i = 0; i<pics.length; i++){
  (function(){
    var pic = pics[i];
    pic.onclick = function() {
      zoomedImage.src = pic.src;
      zoomModal.style.display = "block";
    }
  }).call(this,i);
};

close.onclick = function() {
    zoomModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == zoomModal) {
        zoomModal.style.display = "none";
    }
}
