import{i as g,S as y}from"./assets/vendor-363aca01.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const b=a=>{const r="3024031-50bf2ca6b1e9bc3513f045fb3",o=new URLSearchParams({key:r,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});console.log(o.toString());const i=`https://pixabay.com/api/?${o.toString()}`;return console.log(i),fetch(i).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})},L=document.querySelector(".search-form"),c=document.querySelector(".picture-and-data-list"),l=document.querySelector(".loader"),v=a=>{a.preventDefault();const r=a.target.elements.picture_search.value.trim();if(console.log(r),r===""){c.innerHTML="",a.target.reset(),g.error({title:"Error",message:"Please enter a search query",position:"topCenter"});return}l.classList.add("is-visible"),b(r).finally(()=>{l.classList.remove("is-visible")}).then(o=>{const i=o.hits.map(s=>({linkWeb:s.webformatURL,linkBig:s.largeImageURL,tags:s.tags,likes:s.likes,views:s.views,comments:s.comments,downloads:s.downloads}));function e({linkWeb:s,linkBig:u,tags:d,likes:m,views:f,comments:p,downloads:h}){return`
   <li class="picture-and-data-item">
   <div class="img-container">
            <a  class="image-link" href="${u}"><img class="image" src="${s}" alt="${d}" />
            </div>
            <ul class="under-picture-list">
                <li class="under-picture-info-item">Likes <span class="data-received">${m}</span></li>
                <li class="under-picture-info-item">Views <span class="data-received">${f}</span></li>
                <li class="under-picture-info-item">Comments <span class="data-received">${p}</span></li>
                <li class="under-picture-info-item">Downloads <span class="data-received">${h}</span></li>
            </ul>
        </li> 
        </a>`}c.innerHTML="";const t=i.map(e).join("");c.insertAdjacentHTML("beforeend",t),new y(".image-link",{focus:!0,captionsData:"alt",captionDelay:250}).show()}).catch(o=>{console.log(o)})};L.addEventListener("submit",v);
//# sourceMappingURL=commonHelpers.js.map
