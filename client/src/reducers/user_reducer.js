import { 
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  ADD_TO_CART_USER
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
    default:
      return state;
  }
}