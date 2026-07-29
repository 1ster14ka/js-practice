import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{a as p,S as m,i as f}from"./assets/vendor-OkDGeYWU.js";const g="46450573-3594decb070dbd953bbf2f5a8";function h(e){return p.get("https://pixabay.com/api/",{params:{key:g,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const d=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,loop:!0}),r=document.querySelector(".gallery"),s=document.querySelector(".loader");function y(e){const a=e.map(({webformatURL:t,largeImageURL:o,tags:n,likes:i,views:l,comments:c,downloads:u})=>`<li class="gallery-item"><a href="${o}"><img src="${t}" alt="${n}"/>
      </a>
      <p>${i}</p>
      <p>${l}</p>
      <p>${c}</p>
      <p>${u}</p>
      </li>`).join("");r.innerHTML=a,d.refresh()}function b(){r.innerHTML=""}function L(){s.classList.remove("close")}function x(){s.classList.add("close")}const S={position:"topRight",timeout:3e3,progressBar:!0,close:!0,maxWidth:"420px",messageColor:"#fff",titleColor:"#fff"},$=document.querySelector(".form");$.addEventListener("submit",q);function q(e){e.preventDefault();const a=e.currentTarget.elements["search-text"].value.trim();b(),L(),h(a).then(t=>{const o=t.data.hits;if(!o.length){f.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",...S});return}y(o)}).catch(t=>{console.log(t)}).finally(()=>{x()}),e.currentTarget.reset()}
//# sourceMappingURL=7-gallery.js.map
