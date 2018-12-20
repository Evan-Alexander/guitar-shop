import axios from 'axios';
import { 
  GET_PRODUCTS_BY_AMOUNT_SOLD,
  GET_PRODUCTS_BY_ARRIVAL
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