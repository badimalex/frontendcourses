import { fetchRequest } from '../helpers/contentful';
import { getItem, setItem } from 'helpers/local-storage';

export function fetchProducts() {
  return fetchRequest({
    contentType: 'product'
  });
}

export function saveToLocalStorage(item: {}) {
  const products = getCardState();

  setItem('products', JSON.stringify(products.concat(item)));
}

export function getCardState() {
  return JSON.parse(getItem('products')) || [];
}
