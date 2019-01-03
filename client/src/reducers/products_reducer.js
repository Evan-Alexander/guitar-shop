import { 
  GET_PRODUCTS_BY_AMOUNT_SOLD,
  GET_PRODUCTS_BY_ARRIVAL,
  GET_BRANDS,
  GET_WOOD_TYPE
} from '../actions/types';

export default function(state={}, action) {
  switch(action.type) {
    case GET_PRODUCTS_BY_AMOUNT_SOLD:
      return {...state, bySold: action.payload }
    case GET_PRODUCTS_BY_ARRIVAL:
      return {...state, byArrival: action.payload }
    case GET_BRANDS:
      return {...state, brands: action.payload }
    case GET_WOOD_TYPE:
      return {...state, woodType: action.payload }
    default:
      return state;
  }
}