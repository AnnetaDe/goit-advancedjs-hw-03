export * from "./render-functions.js";

// library imports
import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// function imports
import { fetchPhotosByQuery } from "./pixabay-api.js";
const searchForm = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loader= document.createElement("span");
loader.classList.add("loader");
document.body.appendChild(loader);

function createGalleryItemMarkup({
  linkWeb,
  linkBig,
  tags,
  likes,
  views,
  comments,
  downloads
}) {
  const galleryItem = `
<li class="picture-and-data-item">
<div class="img-container">
  <a class="image-link" href="${linkBig}">
    <img class="image" src="${linkWeb}" alt="${tags}" />
  </a>
</div>
<ul class="under-picture-list">
  <li class="under-picture-info-item">Likes <span class="data-received">${likes}</span></li>
  <li class="under-picture-info-item">Views <span class="data-received">${views}</span></li>
  <li class="under-picture-info-item">Comments <span class="data-received">${comments}</span></li>
  <li class="under-picture-info-item">Downloads <span class="data-received">${downloads}</span></li>
</ul>
</li>
`;
  return galleryItem;
}
function createGalleryMarkup(images) {
  return images.map(createGalleryItemMarkup).join("");
}

function renderGallery(images) {
  const markup = createGalleryMarkup(images);
  gallery.insertAdjacentHTML("beforeend", markup);
}

function clearGallery() {
  gallery.innerHTML = "";
}

function showToast(message, type = "info") {
  iziToast[type]({
    message,
    position: "topCenter"
  });
}
function showLoader() {
  loader.classList.add("is-visible");
}
function hideLoader() {
  loader.classList.remove("is-visible");
}

function checkQuery(params) {
  if (!params || !params.query) {
    showToast("Invalid search query", "error");
    return false;
  }
  return true;
}
function checkData(data) {
  if (!data || !data.hits || data.hits.length === 0) {
    showToast("No images found", "error");
    return false;
  }
  return true;
}

function getImagesByQuery(query) {
  return fetchPhotosByQuery(query)
    .then(data => {
      if (!checkData(data)) {
        return [];
      }
      return data.hits.map(img => ({
        linkWeb: img.webformatURL,
        linkBig: img.largeImageURL,
        tags: img.tags,
        likes: img.likes,
        views: img.views,
        comments: img.comments,
        downloads: img.downloads
      }));
    })
    .catch(error => {
      console.error("Error fetching images:", error);
      showToast("Error fetching images", "error");
      return [];
    });
}

export { renderGallery, clearGallery, showLoader, hideLoader, showToast, checkQuery, getImagesByQuery };
