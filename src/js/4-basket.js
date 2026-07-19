import {
  renderBasket,
  LS_KEY,
  getBasket,
  saveBasket,
  toggleClearButton,
} from './utils';

export const productsContainer = document.querySelector('.product-list');
const btnClear = document.querySelector('.clear-btn');
export const title = document.querySelector('.title-price');

toggleClearButton(btnClear);

renderBasket(productsContainer, title);

btnClear.addEventListener('click', clearLocalStorage);

function clearLocalStorage(event) {
  localStorage.removeItem(LS_KEY);
  renderBasket(productsContainer, title);
  toggleClearButton(btnClear);
}

productsContainer.addEventListener('click', deleteProductBasket);

function deleteProductBasket(event) {
  if (!event.target.classList.contains('product-btn')) {
    return;
  }
  const idProduct = Number(event.target.closest('.product-item').dataset.id);

  const newProducts = getBasket().filter(({ id }) => id !== idProduct);
  saveBasket(newProducts);

  if (!newProducts.length) {
    toggleClearButton(btnClear);
    title.textContent = '';
  }

  renderBasket(productsContainer, title);
}
