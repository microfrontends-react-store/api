import { BehaviorSubject } from "rxjs";

const URL_MERCADOAPI = "https://api.mercadolibre.com";
const URL_GET_SEARCH = "/sites/MCO/search?q=";
const URL_GET_PRODUCT_BY_ID = "/items/";

const products = new BehaviorSubject([]);

export const setProdutcs = (data) => {
  products.next(data);
};

export const getProducts = () => {
  return products;
};

export const getProductsByKeyword = async (keyword) => {
  const response = await fetch(`${URL_MERCADOAPI}${URL_GET_SEARCH}${keyword}`);
  const data = await response.json();
  return data;
};

export const getProductById = async (id) => {
  const response = await fetch(
    `${URL_MERCADOAPI}${URL_GET_PRODUCT_BY_ID}${id}`
  );
  const data = await response.json();
  return data;
};