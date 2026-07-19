const r="basket";function i(t){return t.map(({id:s,image:a,title:c,description:e,price:o})=>`<li class="product-item" data-id="${s}">
  <img src="${a}" alt="${c}" class="product-img"/>
  <div class="product-wrapp">
    <h2 class="product-title">${c}</h2>
    <p class="product-subtitle">${e}</p>
    <p class="product-price">${o}<span class="product-value">$</span></p>
    <button class="product-btn">Add to cart</button>
  </div>
  </li>
  `).join("")}function u(t){return t.map(({id:s,image:a,title:c,description:e,price:o,qty:n})=>`<li class="product-item" data-id="${s}">
  <img src="${a}" alt="${c}" class="product-img"/>
  <div class="product-wrapp">
    <h2 class="product-title">${c}</h2>
    <p class="product-subtitle">${e}</p>
    <p class="product-price">${o}<span class="product-value">$</span></p>
     <p>Quantity: ${n}</p>
    <button class="product-btn">Delete</button>
  </div>
  </li>
  `).join("")}function d(t,s){const a=p();t.innerHTML=u(a),l(s,a)}function p(){return JSON.parse(localStorage.getItem(r))||[]}function $(t){localStorage.setItem(r,JSON.stringify(t))}function l(t,s){const a=Math.ceil(s.reduce((c,{price:e,qty:o})=>c+e*o,0));t.textContent=`Total price: ${a}$`}function g(t){t.hidden=!p().length}export{r as L,i as c,p as g,d as r,$ as s,g as t};
//# sourceMappingURL=utils-CBUHWKoz.js.map
