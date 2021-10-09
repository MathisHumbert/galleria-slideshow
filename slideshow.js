const slideMain = document.querySelector('.slideshow');

async function fetchData(URL) {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

async function getData(URL) {
  const data = await fetchData(URL);
  displaySlideShow(data);
}

window.addEventListener('DOMContentLoaded', () => {
  getData('./data.json');
});

function displaySlideShow(data) {
  let dataHtml = data
    .map((item) => {
      let { images, name, artist, year, description, source } = item;

      return `
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
    </div>
  </div> `;
    })
    .join(' ');

  slideMain.innerHTML = dataHtml;

  const slides = document.querySelectorAll('.single-slideshow');

  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });

  let counter = 1;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

// <div class="gallery-image">
//   <div>
//     <p class="close">close</p>
//     <img src="${images.gallery}" alt="${name}" />
//   </div>
// </div>
