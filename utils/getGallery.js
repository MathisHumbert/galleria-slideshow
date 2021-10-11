// imports
import fetchData from './fetch.js';
import displayGallery from './displayGallery.js';

// get and display the html
async function getGallery(URL) {
  const data = await fetchData(URL);
  displayGallery(data);
}

export default getGallery;
