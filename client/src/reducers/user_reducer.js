import { 
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  ADD_TO_CART_USER,
  GET_CART_ITEMS_USER,
  REMOVE_CART_ITEM_USER,
  ON_PURCHASE_SUCCESS_USER
} from '../actions/types';

export default function(state={}, action) {
  switch(action.type) {
    case REGISTER_USER:
      return {...state, register: action.payload }
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload }
    case AUTH_USER:
      return { ...state, userData: action.payload }
    case LOGOUT_USER:
      return { ...state } // Here, we're just destroying the token.  Nothing to return.
    case ADD_TO_CART_USER:
    // Because we are only updating user.userData.cart ...
      return {...state, userData: {
        // we grab a copy of userData and 
        ...state.userData,
        // specifically merge the new cart information w/ the userData
        cart: action.payload
      }}
    case GET_CART_ITEMS_USER:
      return {...state, cartDetail: action.payload}
    case REMOVE_CART_ITEM_USER:
      return {...state, 
        cartDetail: action.payload.cartDetail,
        userData: {
          ...state.userData,
          cart: action.payload.cart
        }
      }
    case ON_PURCHASE_SUCCESS_USER: 
      return {
        ...state,
        successBuy: action.payload.success,
        userData: {
          ...state.userData,
          cart: action.payload.cart
        },
        cartDetail: action.payload.cartDetail
      }
    default:
      return state;
  }
}