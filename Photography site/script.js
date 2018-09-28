var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshowPic");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}




/*
var galleryIndex = 1;
showGallery(galleryIndex);

function plusGallery(n) {
  showGallery(galleryIndex +=n);
  var inGallery = document.getElementsByClassName("inGallery");
  var gallery = document.getElementsByClassName("thumbnail");
  for (var i = 0; i<gallery.length; i++){
    if (!(gallery[i].classList.contains("inGallery")) && i>(galleryIndex+5){
      gallery[i].classList.add("inGallery");
      gallery[i-6].classList.remove("inGallery");
    }
  }
}

function currentGalleryImage(n){
  showGallery(galleryIndex = n);
}

function showGallery(n){
  var i;
  var j;
  var gallery = document.getElementsByClassName("thumbnail");
  var inGallery = document.getElementsByClassName("inGallery");
  if (n > gallery.length){
    galleryIndex = 1;
  }
  if (n<1){
    galleryIndex = gallery.length;
  }
  for(i = 0; i<gallery.length; i++){
    gallery[i].style.display = "none";
  }
  for(j = 0; j<inGallery.length; j++){
    inGallery[j].style.display="block";
  }
}
*/
