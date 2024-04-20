import { refs } from "./js/refs";
import { createMarcup } from "./js/render-functions";
import { searchImages } from "./js/pixabay-api";

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let searchInput;
let currentPage = 1;
const perPage = 15;
const lightbox = new SimpleLightbox('.js-images-list a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

refs.loaderEl.style.display = 'none';
refs.loaderMoreEl.style.display = 'none';
refs.buttonMoreEl.style.display = 'none';
refs.ehdLoaderEl.style.display = 'none';

refs.buttonMoreEl.addEventListener('click', handleClick);
refs.formEl.addEventListener('submit', handleSubmit);

 async function handleSubmit(event){
    event.preventDefault();
 
    refs.loaderEl.style.display = 'block';
    refs.imagesList.innerHTML = '';

  searchInput = event.currentTarget.querySelector('.search-input').value.trim();

  if (searchInput === "") {
    iziToast.error({title: 'Error', messege: 'Sorry, there are no images matching your search query. Please try again!',})
    return;
}
try {

    const data = await searchImages(searchInput, currentPage);
    const totalPages = Math.ceil(data.totalHits / perPage);
    refs.imagesList.insertAdjacentHTML('beforeend', createMarcup(data.hits));
   
    refs.loaderEl.style.display = 'none';

    iziToast.success({
        title: 'Wow',
        message: `We found ${data.totalHits} pictures!`,
      });

    if (currentPage === totalPages) {
        refs.buttonMoreEl.style.display = 'none';
        refs.ehdLoaderEl.style.display = 'block';
      } else {
        refs.buttonMoreEl.style.display = 'block';
      }

 
} catch (error) {console.log(error)};
  
  lightbox.refresh();
  searchInput = '';
  refs.loaderEl.style.display = 'none';
    
}

async function handleClick() {
    currentPage += 1;

    refs.loaderMoreEl.style.display = 'block';
    refs.buttonMoreEl.style.display = 'none';

    try {
        const data = await  searchImages(searchInput, currentPage);
        const totalPages = Math.ceil(data.totalHits / perPage);
        refs.imagesList.insertAdjacentHTML('beforeend', createMarcup(data.hits));
        if (currentPage === totalPages) {
            refs.buttonMoreEl.style.display = 'none';
            refs.ehdLoaderEl.style.display = 'block';
          } else {
            refs.buttonMoreEl.style.display = 'block';
          }

    } catch (error) {console.log(error)};

    const height = () =>
    refs.imadgeItem.getBoundingClientRect().height;
  
  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });

  lightbox.refresh();
  searchInput = '';
  refs.loaderMoreEl.style.display = 'none';  
  }


