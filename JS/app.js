  // ES6 Class
  class TypeWriter {
    constructor(txtElement, words, wait = 2500) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }

    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];

      // Check if deleting
      if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

      // Initial Type Speed
      let typeSpeed = 300;

      if(this.isDeleting) {
        typeSpeed /= 2.5;
      }

      // If word is complete
      if(!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
      }

      setTimeout(() => this.type(), typeSpeed);
    }
  }


  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);

  // Init App
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }
/* Animate Icons */
function speedoMeter() {
  let speedometer = document.getElementById('speedometer');
  speedometer.innerHTML = '&#xf62d';
  setTimeout(() => {
      speedometer.innerHTML = '&#xf62c;';
  }, 1000);    
  setTimeout(() => {
      speedometer.innerHTML = '&#xf62a;';
  }, 2000); 
  setTimeout(() => {
    speedometer.innerHTML = '&#xf62b;';
}, 3000);
};
setInterval(speedoMeter, 4000);
speedoMeter();

function cellPhone() {
  let cellphone = document.getElementById('cellphone');
  cellphone.innerHTML = '&#xf62d';
  setTimeout(() => {
      cellphone.innerHTML = '&#xf62c;';
  }, 1000);    
  setTimeout(() => {
      cellphone.innerHTML = '&#xf62a;';
  }, 2000); 
  setTimeout(() => {
    cellphone.innerHTML = '&#xf62b;';
}, 3000);
};
setInterval(cellPhone, 4000);
cellPhone();

function lightBulb() {
  let lightbulb = document.getElementById('lightbulb');
  lightbulb.innerHTML = '&#xf0eb';
  setTimeout(() => {
      lightbulb.innerHTML = '&#xf672;';
  }, 1000);    
};
setInterval(lightBulb, 2000);
lightBulb();
/* end animation icons */

/* sliders */
let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i <  sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[1].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
