const slideMain = document.querySelector('.slideshow');
const backBtn = document.querySelector('.back');
const nextBtn = document.querySelector('.next');
const bar = document.querySelector('.width-bar');
const galleryImg = document.querySelector('.gallery-image');
const footerArtist = document.querySelector('.footer-artist');
const footerName = document.querySelector('.footer-name');

let counter = parseInt(localStorage.getItem('counter'));

async function fetchData(URL) {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

async function getData(URL) {
  const data = await fetchData(URL);
  displaySlideShow(data, counter);
}

window.addEventListener('DOMContentLoaded', () => {
  getData('./data.json');
  barProgress(counter, 14);
});

backBtn.addEventListener('click', () => {
  backSlide(14);
});
nextBtn.addEventListener('click', () => {
  nextSlide(14);
});

function displaySlideShow(data, start) {
  let { images, name, artist, year, description, source } = data[start];
  let slideHml = `
    <div class="single-slideshow">
      <div class="img-container">
        <img src="${images.hero.large}" alt="" class="slideshow-main-img" />
        <div class="view-image">
          <img src="./assets/shared/icon-view-image.svg" alt="" />
          <p>view image</p>
        </div>
        <div class="slideshow-header">
          <h1 class="head1">${name}</h1>
          <p class="shead1">${artist.name}</p>
          <img src="${artist.image}" alt="" class="artist-img" />
        </div>
        
      </div>
      <div class="painting-info">
        <p>${description}</p>
        <a href="${source}" target="_blank" class="link source">
          go to source
        </a>
        <span class="date">${year}</span>
      </div>
    </div>`;

  slideMain.innerHTML = slideHml;
  galleryImg.innerHTML = `<div>
  <p class="close-btn">close</p>
  <img src="${images.gallery}" alt="${name}" />
</div>`;
  setTimeout(() => {
    slideMain.style.visibility = 'visible';
    slideMain.style.transform = 'translateX(0%)';
  }, 750);
  footerArtist.textContent = artist.name;
  footerName.textContent = name;

  const viewImage = slideMain.querySelector('.view-image');
  const closeBtn = document.querySelector('.close-btn');

  viewImage.addEventListener('click', () => galleryImg.classList.add('show'));
  closeBtn.addEventListener('click', () => galleryImg.classList.remove('show'));
}

function backSlide(data) {
  counter--;
  if (counter < 0) counter = data;

  slideMain.style.transform = 'translateX(-200vw)';
  setTimeout(() => {
    slideMain.style.visibility = 'hidden';
    slideMain.style.transform = 'translateX(200vw)';
    getData('./data.json');
  }, 750);

  barProgress(counter, data);
}

function nextSlide(data) {
  counter++;
  if (counter > data) counter = 0;

  slideMain.style.transform = 'translateX(200vw)';
  setTimeout(() => {
    slideMain.style.visibility = 'hidden';
    slideMain.style.transform = 'translateX(-200vw)';
    getData('./data.json');
  }, 1000);
  barProgress(counter, data);
}

function barProgress(counter, max) {
  bar.style.width = `${Math.ceil((counter / max) * 100)}%`;
}
