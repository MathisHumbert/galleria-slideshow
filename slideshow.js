const slideMain = document.querySelector('.slideshow');
const backBtn = document.querySelector('.back');
const nextBtn = document.querySelector('.next');

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
  <div class="gallery-image">
  <div>
    <p class="close-btn">close</p>
    <img src="${images.gallery}" alt="${name}" />
  </div>
  </div>
    <div class="single-slideshow">
      <div class="img-container">
        <img src="${images.hero.small}" alt="" class="slideshow-main-img" />
        <div class="view-image">
          <img src="./assets/shared/icon-view-image.svg" alt="" />
          <p>view image</p>
        </div>
        <div class="slideshow-header">
          <h1 class="head1">${name}</h1>
          <p class="shead1">${artist.name}</p>
        </div>
        <img src="${artist.image}" alt="" class="artist-img" />
      </div>
      <div class="painting-info">
        <p>${description}</p>
        <a href="${source}" class="link">
          go to source
        </a>
        <span class="date">${year}</span>
      </div>`;

  slideMain.innerHTML = slideHml;

  const viewImage = slideMain.querySelector('.view-image');
  const galleryImg = slideMain.querySelector('.gallery-image');
  const closeBtn = slideMain.querySelector('.close-btn');

  viewImage.addEventListener('click', () => galleryImg.classList.add('show'));
  closeBtn.addEventListener('click', () => galleryImg.classList.remove('show'));
}

function backSlide(data) {
  console.log(counter);
  counter--;

  if (counter < 0) counter = data;
  getData('./data.json');
}

function nextSlide(data) {
  console.log(counter);
  counter++;

  if (counter > data) counter = 0;
  getData('./data.json');
}
