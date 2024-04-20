import{a as f,S as b,i as d}from"./assets/vendor-f736e62a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const e={formEl:document.querySelector(".js-search-form"),imagesList:document.querySelector(".js-images-list"),loaderEl:document.querySelector(".loader"),loaderMoreEl:document.querySelector(".loader-more"),buttonMoreEl:document.querySelector(".load-button"),ehdLoaderEl:document.querySelector(".end-loader"),imadgeItem:document.querySelector(".images-list-item")};function u(r){return r.map(({id:t,webformatURL:a,largeImageURL:i,tags:s,likes:o,views:l,comments:h,downloads:g})=>`<li class="images-list-item" data-id='${t}'>
        <a class="images-list-link" href="${i}">
            <img class="images-list-image" src="${a}" alt="${s}"></img>
        </a>
        <div class="tumb">
            <div class="block">
                <h2 class="tittle">Likes</h2>
                <p class="text">${o}</p>
            </div>
            <div class="block">
                <h2 class="tittle">Views</h2>
                <p class="text">${l}</p>
            </div>
            <div class="block">
                <h2 class="tittle">Comments</h2>
                <p class="text">${h}</p>
            </div>
            <div class="block">
                <h2 class="tittle">Downloads</h2>
                <p class="text">${g}</p>
            </div>
        </div>
    </li>`).join("")}async function y(r,t){const a="https://pixabay.com/api/",i="43313350-287c14b2000f5e13b9dad3a59",o=new URLSearchParams({key:i,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15});try{return(await f(`${a}?${o}`)).data}catch(l){l.length!=null&&iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}}let n,c=1;const m=15,p=new b(".js-images-list a",{captions:!0,captionsData:"alt",captionDelay:250});e.loaderEl.style.display="none";e.loaderMoreEl.style.display="none";e.buttonMoreEl.style.display="none";e.ehdLoaderEl.style.display="none";e.buttonMoreEl.addEventListener("click",L);e.formEl.addEventListener("submit",E);async function E(r){if(r.preventDefault(),e.loaderEl.style.display="block",e.imagesList.innerHTML="",n=r.currentTarget.querySelector(".search-input").value.trim(),n===""){d.error({title:"Error",messege:"Sorry, there are no images matching your search query. Please try again!"});return}try{const t=await y(n,c),a=Math.ceil(t.totalHits/m);e.imagesList.insertAdjacentHTML("beforeend",u(t.hits)),e.loaderEl.style.display="none",d.success({title:"Wow",message:`We found ${t.totalHits} pictures!`}),c===a?(e.buttonMoreEl.style.display="none",e.ehdLoaderEl.style.display="block"):e.buttonMoreEl.style.display="block"}catch(t){console.log(t)}p.refresh(),n="",e.loaderEl.style.display="none"}async function L(){c+=1,e.loaderMoreEl.style.display="block",e.buttonMoreEl.style.display="none";try{const t=await y(n,c),a=Math.ceil(t.totalHits/m);e.imagesList.insertAdjacentHTML("beforeend",u(t.hits)),c===a?(e.buttonMoreEl.style.display="none",e.ehdLoaderEl.style.display="block"):e.buttonMoreEl.style.display="block"}catch(t){console.log(t)}const r=()=>e.imadgeItem.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"}),p.refresh(),n="",e.loaderMoreEl.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
