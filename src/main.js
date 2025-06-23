
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { renderGallery, clearGallery, showLoader, hideLoader, showToast, checkQuery, getImagesByQuery } from "./js/render-functions.js";

export const onSearchFormSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.picture_search.value.trim();
  
    if (!checkQuery({ query })) {
      return;
    }
    showLoader();
    clearGallery();
    getImagesByQuery(query)
      .then(images => {
        if (images.length > 0) {
          renderGallery(images);
          showToast(`Found ${images.length} images`, "success");
          let lightbox;
          if (!lightbox) {
            lightbox = new SimpleLightbox(".gallery a", {
              captionsData: "alt",
              captionDelay: 250,
            });
          } else {
            lightbox.refresh();
          }
      
        } else {
          showToast("No images found", "error");
        }
      })
      .finally(() => {
        hideLoader();
      });
   
  };

const searchForm = document.querySelector(".form");
searchForm.addEventListener("submit", onSearchFormSubmit);
