import { products } from './data.js';
import { createMarkupProductsShop, getBasket, saveBasket } from './utils.js';
const productsContainer = document.querySelector('.product-list');

productsContainer.insertAdjacentHTML(
  'beforeend',
  createMarkupProductsShop(products)
);

productsContainer.addEventListener('click', addProduct);

function addProduct(event) {
  if (!event.target.classList.contains('product-btn')) {
    return;
  }

  const idProduct = Number(event.target.closest('.product-item').dataset.id);
  const product = products.find(({ id }) => id === idProduct);
  if (!product) {
    return;
  }
  const basketProducts = getBasket();

  const indexProduct = basketProducts.findIndex(({ id }) => id === idProduct);
  if (indexProduct !== -1) {
    basketProducts[indexProduct].qty += 1;
  } else {
    basketProducts.push({
      ...product,
      qty: 1,
    });
  }
  saveBasket(basketProducts);
}
