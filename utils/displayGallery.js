// get element
const homeGallery = document.querySelector('.home-gallery');

// create the html
function displayGallery(data) {
  let dataHtml = data
    .map((item, index) => {
      const name = item.name;
      const artist = item.artist.name;
      const img = item.images.thumbnail;

      return `
    <a href="slideshow.html"class="gallery-single-item" data-index="${index}">
        <img src="${img}" alt="${name}" />
        <div class="gallery-image-info">
          <h1>${name}</h1>
          <p>${artist}</p>
        </div>
        <div class="filter"></div>
      </a>
    `;
    })
    .join('');

  homeGallery.innerHTML = dataHtml;
  const gallerySingleItem = document.querySelectorAll('.gallery-single-item');

  // local storage for the slideshow
  gallerySingleItem.forEach((item) => {
    item.addEventListener('click', (e) => {
      localStorage.setItem('counter', e.currentTarget.dataset.index);
    });
  });
}

export default displayGallery;
