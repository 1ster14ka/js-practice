export const LS_KEY = 'basket';

export function createMarkupProductsShop(arr) {
  return arr
    .map(
      ({
        id,
        image,
        title,
        description,
        price,
      }) => `<li class="product-item" data-id="${id}">
  <img src="${image}" alt="${title}" class="product-img"/>
  <div class="product-wrapp">
    <h2 class="product-title">${title}</h2>
    <p class="product-subtitle">${description}</p>
    <p class="product-price">${price}<span class="product-value">$</span></p>
    <button class="product-btn">Add to cart</button>
  </div>
  </li>
  `
    )
    .join('');
}

export function createMarkupProductsBasket(arr) {
  return arr
    .map(
      ({
        id,
        image,
        title,
        description,
        price,
        qty,
      }) => `<li class="product-item" data-id="${id}">
  <img src="${image}" alt="${title}" class="product-img"/>
  <div class="product-wrapp">
    <h2 class="product-title">${title}</h2>
    <p class="product-subtitle">${description}</p>
    <p class="product-price">${price}<span class="product-value">$</span></p>
     <p>Quantity: ${qty}</p>
    <button class="product-btn">Delete</button>
  </div>
  </li>
  `
    )
    .join('');
}

export function renderBasket(container, titleElement) {
  const basket = getBasket();
  container.innerHTML = createMarkupProductsBasket(basket);
  updateTotal(titleElement, basket);
}

export function getBasket() {
  return JSON.parse(localStorage.getItem(LS_KEY)) || [];
}

export function saveBasket(data) {
  localStorage.setItem(LS_KEY, JSON.stringify(data));
}

function updateTotal(titleElement, arr) {
  const total = Math.ceil(
    arr.reduce((acc, { price, qty }) => acc + price * qty, 0)
  );
  titleElement.textContent = `Total price: ${total}$`;
}

export function toggleClearButton(btnElement) {
  btnElement.hidden = !getBasket().length;
}
