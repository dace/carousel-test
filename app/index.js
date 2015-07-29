"use strict";

import StyleSheet from './index.styl';


class Carousel {
  constructor (imageSlideshow) {
    this.imageSlideshow = imageSlideshow; 
  }

  renderImages(){
    this.imageSlideshow.forEach(function(image){
      let newDiv = document.createElement('div');
      newDiv.innerHTML = `<img src=../assets/${image} class=images>`;
      document.getElementById("carousel").appendChild(newDiv);
    });
  }

  buttonControls(){  
    
    let currentImageIndex = 0;
    let nextButton = document.getElementById('next');
    let prevButton = document.getElementById('prev');
    
    function moveImages() {
      $("#carousel").velocity({
        translateX: `${currentImageIndex * -800}px`
      }); 
    }

    nextButton.onclick = function(){
      currentImageIndex++;
      moveImages();
    };

    prevButton.onclick = function(){
      currentImageIndex--;
      moveImages();    
    };
  }


}



let imagesArray = ["place_01.jpg", "place_02.jpg", "place_03.jpg", "place_04.jpg", "place_05.jpg"];



let TravelCarousel = new Carousel(imagesArray);
TravelCarousel.renderImages();
TravelCarousel.buttonControls();




