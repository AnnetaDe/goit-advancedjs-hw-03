import{i as a,S as d}from"./assets/vendor-8501dee5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m=i=>{const o="3024031-50bf2ca6b1e9bc3513f045fb3",s=new URLSearchParams({key:o,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});console.log(s.toString());const e=`https://pixabay.com/api/?${s.toString()}`;return console.log(e),fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);if(t.status===404)throw new Error("Not Found");return t.json()})},u=document.querySelector(".form"),l=document.querySelector(".gallery"),c=document.querySelector(".loader");function f({linkWeb:i,linkBig:o,tags:s,likes:n,views:e,comments:t,downloads:r}){return`
<li class="picture-and-data-item">
<div class="img-container">
  <a class="image-link" href="${o}">
    <img class="image" src="${i}" alt="${s}" />
  </a>
</div>
<ul class="under-picture-list">
  <li class="under-picture-info-item">Likes <span class="data-received">${n}</span></li>
  <li class="under-picture-info-item">Views <span class="data-received">${e}</span></li>
  <li class="under-picture-info-item">Comments <span class="data-received">${t}</span></li>
  <li class="under-picture-info-item">Downloads <span class="data-received">${r}</span></li>
</ul>
</li>
`}const p=i=>{i.preventDefault();const o=i.target.elements.picture_search.value.trim();if(o===""){l.innerHTML="",i.target.reset(),a.error({title:"Error",message:"Please enter a search query",position:"topCenter"});return}c.classList.add("is-visible"),m(o).finally(()=>{c.classList.remove("is-visible")}).then(s=>{const n=s.hits.map(r=>({linkWeb:r.webformatURL,linkBig:r.largeImageURL,tags:r.tags,likes:r.likes,views:r.views,comments:r.comments,downloads:r.downloads}));if(s.totalHits===0){a.error({title:"Error",message:"No images found",position:"topCenter"});return}l.innerHTML="";const e=n.map(f).join("");l.insertAdjacentHTML("beforeend",e),a.success({title:"Success",message:`Found ${s.totalHits} images`,position:"topCenter"}),u.reset();let t;t||(t=new d(".image-link",{focus:!0,captionsData:"alt",captionDelay:250})),t.refresh()}).catch(s=>{console.log(s)})};u.addEventListener("submit",p);
//# sourceMappingURL=commonHelpers.js.map
