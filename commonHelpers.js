import{i as u,S as f}from"./assets/vendor-403a0c46.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const d=e=>{const t="3024031-50bf2ca6b1e9bc3513f045fb3",o=new URLSearchParams({key:t,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"});console.log(o.toString());const r=`https://pixabay.com/api/?${o.toString()}`;return console.log(r),fetch(r).then(n=>{if(!n.ok)throw new Error(n.status);if(n.status===404)throw new Error("Not Found");return n.json()})},l=document.querySelector(".gallery"),c=document.querySelector(".loader");document.body.appendChild(c);function m({linkWeb:e,linkBig:t,tags:o,likes:s,views:r,comments:n,downloads:i}){return`
<li class="picture-and-data-item">
<div class="img-container">
  <a class="image-link" href="${t}">
    <img class="image" src="${e}" alt="${o}" />
  </a>
</div>
<ul class="under-picture-list">
  <li class="under-picture-info-item">Likes <span class="data-received">${s}</span></li>
  <li class="under-picture-info-item">Views <span class="data-received">${r}</span></li>
  <li class="under-picture-info-item">Comments <span class="data-received">${n}</span></li>
  <li class="under-picture-info-item">Downloads <span class="data-received">${i}</span></li>
</ul>
</li>
`}function p(e){return e.map(m).join("")}function h(e){const t=p(e);l.insertAdjacentHTML("beforeend",t)}function y(){l.innerHTML=""}function a(e,t="info"){u[t]({message:e,position:"topCenter"})}function g(){c.classList.add("is-visible")}function b(){c.classList.remove("is-visible")}function L(e){return!e||!e.query?(a("Invalid search query","error"),!1):!0}function v(e){return!e||!e.hits||e.hits.length===0?(a("No images found","error"),!1):!0}function w(e){return d(e).then(t=>v(t)?t.hits.map(o=>({linkWeb:o.webformatURL,linkBig:o.largeImageURL,tags:o.tags,likes:o.likes,views:o.views,comments:o.comments,downloads:o.downloads})):[]).catch(t=>(console.error("Error fetching images:",t),a("Error fetching images","error"),[]))}const S=e=>{e.preventDefault();const t=e.target.elements.picture_search.value.trim();L({query:t})&&(g(),y(),w(t).then(o=>{if(o.length>0){h(o),a(`Found ${o.length} images`,"success");let s;s?s.refresh():s=new f(".gallery a",{captionsData:"alt",captionDelay:250})}else a("No images found","error")}).finally(()=>{b()}))},$=document.querySelector(".form");$.addEventListener("submit",S);
//# sourceMappingURL=commonHelpers.js.map
