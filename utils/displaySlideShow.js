// get elements
const galleryImg = document.querySelector('.gallery-image');
const footerArtist = document.querySelector('.footer-artist');
const footerName = document.querySelector('.footer-name');
const slideMain = document.querySelector('.slideshow');

// create the HTML for each slide
function displaySlideShow(data, start) {
  // destructuring
  let { images, name, artist, year, description, source } = data[start];

  // html
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

  // push the html
  slideMain.innerHTML = slideHml;
  galleryImg.innerHTML = `<div>
  <p class="close-btn">close</p>
  <img src="${images.gallery}" alt="${name}" />
</div>`;

  // transition slide
  setTimeout(() => {
    slideMain.style.visibility = 'visible';
    slideMain.style.transform = 'translateX(0%)';
  }, 750);

  // footer html// transition slide

  setTimeout(() => {
    footerArtist.textContent = artist.name;
    footerName.textContent = name;
    footerName.style.opacity = '1';
    footerArtist.style.opacity = '1';
  }, 750);

  // get elements
  const viewImage = slideMain.querySelector('.view-image');
  const closeBtn = document.querySelector('.close-btn');

  // toggle the gallery img
  viewImage.addEventListener('click', () => galleryImg.classList.add('show'));
  closeBtn.addEventListener('click', () => galleryImg.classList.remove('show'));
}

export default displaySlideShow;
