import { fetchRequest } from '../helpers/contentful';

export function fetchProducts() {
  return fetchRequest({
    contentType: 'product'
  });
}
