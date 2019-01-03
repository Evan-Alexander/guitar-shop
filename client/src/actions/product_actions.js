import axios from 'axios';
import { 
  GET_PRODUCTS_BY_AMOUNT_SOLD,
  GET_PRODUCTS_BY_ARRIVAL,
  GET_BRANDS,
  GET_WOOD_TYPE
} from './types';

import { PRODUCT_SERVER } from '../components/utils/misc';

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