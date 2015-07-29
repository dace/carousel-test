"use strict";

import StyleSheet from './index.styl';

// images array
let imageSlideshow = ["place_01.jpg", "place_02.jpg", "place_03.jpg", "place_04.jpg", "place_05.jpg"];

// load images onto the page
function addImages(){
  imageSlideshow.forEach(function(image){
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `<img src=../assets/${image} class=images>`;
    document.getElementById("carousel").appendChild(newDiv);
  });
}

addImages();


// ============= MOVE IMAGES =================================

var currentIndex = 0;

var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

var moveImage = function() {
  $("#carousel").velocity({
    translateX: `${currentIndex * -800}px`
  }); 
 }

nextButton.onclick = function(){
  currentIndex++;
  moveImage();
};

prevButton.onclick = function(){
  currentIndex--;
  moveImage();
};


class Carousel {
  constructor (imageSlideshowArray) {
    this.imageSlideshowArray = imageSlideshowArray;
  }


}




let CreateCarousel = new Carousel;



