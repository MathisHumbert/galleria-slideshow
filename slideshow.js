// import
import getSlideShow from './utils/getSlideShow.js';

// get elements
const slideMain = document.querySelector('.slideshow');
const backBtn = document.querySelector('.back');
const nextBtn = document.querySelector('.next');
const bar = document.querySelector('.width-bar');

const footerArtist = document.querySelector('.footer-artist');
const footerName = document.querySelector('.footer-name');
// get the page clicked on
let counter = parseInt(localStorage.getItem('counter'));

// display the html when loading
window.addEventListener('DOMContentLoaded', () => {
  getSlideShow('./data.json', counter);
  barProgress(counter, 14);
});

// btns events
backBtn.addEventListener('click', () => {
  backSlide(14);
});
nextBtn.addEventListener('click', () => {
  nextSlide(14);
});

// back button function
function backSlide(data) {
  counter--;
  if (counter < 0) counter = data;

  // animation slide
  slideAnimation(counter, 200);

  // animation bar
  barProgress(counter, data);

  // local storage for the slideshow
  localStorage.setItem('counter', counter);
}

// next button function
function nextSlide(data) {
  counter++;
  if (counter > data) counter = 0;

  // animation slide
  slideAnimation(counter, -200);

  // animation bar
  barProgress(counter, data);

  // local storage for the slideshow
  localStorage.setItem('counter', counter);
}

// bar progress function
function barProgress(counter, max) {
  bar.style.width = `${Math.ceil((counter / max) * 100)}%`;
}

function slideAnimation(counter, num) {
  // animation
  slideMain.style.transform = `translateX(${num}vw)`;
  footerName.style.opacity = '0';
  footerArtist.style.opacity = '0';

  setTimeout(() => {
    slideMain.style.visibility = 'hidden';
    slideMain.style.transform = `translateX(${-num}vw)`;

    getSlideShow('./data.json', counter);
  }, 750);
}
