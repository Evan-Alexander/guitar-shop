import axios from 'axios';
import { 
  GET_PRODUCTS_BY_AMOUNT_SOLD,
  GET_PRODUCTS_BY_ARRIVAL,
  GET_BRANDS,
  GET_WOOD_TYPE,
  GET_PRODUCTS_TO_SHOP,
  ADD_PRODUCT,
  CLEAR_PRODUCT
} from './types';

import { PRODUCT_SERVER } from '../components/utils/misc';
import add_product from '../components/User/Admin/add_product';

export function getProductsByAmountSold() {
// '/ariticles?sortBy=sold&order=desc&limit=100'

  const request = axios.get(`${PRODUCT_SERVER}/articles?sortBy=sold&order=desc&limit=4`)
    .then(response => response.data);

    return {
      type: GET_PRODUCTS_BY_AMOUNT_SOLD,
      payload: request
    }
}

export function getProductsByArrival() {
  const request = axios.get(`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=4`)
  .then(response => response.data);

  return {
    type: GET_PRODUCTS_BY_ARRIVAL,
    payload: request
  }
}

export function getProductsToShop(skip, limit, filters = [], previousState = []) {
  const data = {
    limit,
    skip,
    filters
  }

  const request = axios.post(`${PRODUCT_SERVER}/shop`, data)
    .then(response => {

      let newState = [
        ...previousState,
        ...response.data.articles
      ];

      return {
        size: response.data.size,
        articles: newState
      }
    });

    return {
      type: GET_PRODUCTS_TO_SHOP,
      payload: request
    }
}

export function addProduct(dataToSubmit) {
  const request = axios.post(`${PRODUCT_SERVER}/article`, dataToSubmit)
    .then(response => response.data)
  
  return {
    type: ADD_PRODUCT,
    payload: request
  }
}

export function clearProduct() {
  return {
    type: CLEAR_PRODUCT,
    payload: ''
  }
}

/////////////////////
// CATEGORIES
/////////////////////

export function getBrands() {
  const request = axios.get(`${PRODUCT_SERVER}/brands`)
    .then(response => response.data);

  return {
    type: GET_BRANDS,
    payload: request
  }
}

export function getWoodType() {
  const request = axios.get(`${PRODUCT_SERVER}/woods`)
    .then(response => response.data);

    return {
      type: GET_WOOD_TYPE,
      payload: request
    }
}