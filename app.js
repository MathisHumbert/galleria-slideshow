// get elements
const homeGallery = document.querySelector('.home-gallery');

async function fetchData(URL) {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

async function getData(URL) {
  const data = await fetchData(URL);

  displayData(data);
}

window.addEventListener('DOMContentLoaded', () => {
  getData('./data.json');
});

function displayData(data) {
  let dataHtml = data
    .map((item) => {
      const name = item.name;
      const artist = item.artist.name;
      const img = item.images.thumbnail;

      return `
    <a class="single-item">
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
}