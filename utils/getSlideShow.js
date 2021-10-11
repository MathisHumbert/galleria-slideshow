// import
import displaySlideShow from './displaySlideShow.js';
import fetchData from './fetch.js';

// get and display the html
async function getSlideShow(URL, counter) {
  const data = await fetchData(URL);
  displaySlideShow(data, counter);
}

export default getSlideShow;
