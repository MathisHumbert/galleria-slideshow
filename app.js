// get elements
const homeGallery = document.querySelector('.home-gallery');

async function fetchData(URL) {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

async function getData(URL) {
  const data = await fetchData(URL);

  displayGallery(data);
}

window.addEventListener('DOMContentLoaded', () => {
  getData('./data.json');
});

function displayGallery(data) {
  console.log(data);
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
  gallerySingleItem.forEach((item) => {
    item.addEventListener('click', (e) => {
      localStorage.setItem('counter', e.currentTarget.dataset.index);
    });
  });
}
