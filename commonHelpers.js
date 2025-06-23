import{i as u,S as d}from"./assets/vendor-403a0c46.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const f=e=>{const t="3024031-50bf2ca6b1e9bc3513f045fb3",n=new URLSearchParams({key:t,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"});console.log(n.toString());const r=`https://pixabay.com/api/?${n.toString()}`;return console.log(r),fetch(r).then(o=>{if(!o.ok)throw new Error(o.status);if(o.status===404)throw new Error("Not Found");return o.json()})};document.querySelector(".form");const l=document.querySelector(".gallery"),c=document.createElement("span");c.classList.add("loader");document.body.appendChild(c);function m({linkWeb:e,linkBig:t,tags:n,likes:s,views:r,comments:o,downloads:i}){return`
<li class="picture-and-data-item">
<div class="img-container">
  <a class="image-link" href="${t}">
    <img class="image" src="${e}" alt="${n}" />
  </a>
</div>
<ul class="under-picture-list">
  <li class="under-picture-info-item">Likes <span class="data-received">${s}</span></li>
  <li class="under-picture-info-item">Views <span class="data-received">${r}</span></li>
  <li class="under-picture-info-item">Comments <span class="data-received">${o}</span></li>
  <li class="under-picture-info-item">Downloads <span class="data-received">${i}</span></li>
</ul>
</li>
`}function p(e){return e.map(m).join("")}function h(e){const t=p(e);l.insertAdjacentHTML("beforeend",t)}function y(){l.innerHTML=""}function a(e,t="info"){u[t]({message:e,position:"topCenter"})}function g(){c.classList.add("is-visible")}function b(){c.classList.remove("is-visible")}function L(e){return!e||!e.query?(a("Invalid search query","error"),!1):!0}function v(e){return!e||!e.hits||e.hits.length===0?(a("No images found","error"),!1):!0}function w(e){return f(e).then(t=>v(t)?t.hits.map(n=>({linkWeb:n.webformatURL,linkBig:n.largeImageURL,tags:n.tags,likes:n.likes,views:n.views,comments:n.comments,downloads:n.downloads})):[]).catch(t=>(console.error("Error fetching images:",t),a("Error fetching images","error"),[]))}const S=e=>{e.preventDefault();const t=e.target.elements.picture_search.value.trim();L({query:t})&&(g(),y(),w(t).then(n=>{if(n.length>0){h(n),a(`Found ${n.length} images`,"success");let s;s?s.refresh():s=new d(".gallery a",{captionsData:"alt",captionDelay:250})}else a("No images found","error")}).finally(()=>{b()}))},$=document.querySelector(".form");$.addEventListener("submit",S);
//# sourceMappingURL=commonHelpers.js.map
