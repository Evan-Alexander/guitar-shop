import React, { Component } from 'react';
import UserLayout from '../../hoc/user_layout';
import ProductBlock from '../utils/User/product_block';

import { connect } from 'react-redux';
import { getCartItems, removeCartItem } from '../../actions/user_actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrownOpen } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';

class UserCart extends Component {

  state = {
    loading: true,
    total: 0,
    showTotal: false,
    showSuccess: false
  }

  componentDidMount() {
    let cartItems = [];
    let cart = this.props.user.userData.cart;
    if(cart) {
      if(cart.length > 0) {
        cart.forEach(item => {
          cartItems.push(item.id)
        });
        this.props.dispatch(getCartItems(cartItems, cart))
          .then(() => {
            if(this.props.user.cartDetail.length > 0) {
              this.calculateTotal(this.props.user.cartDetail);
            }
          })
      } 
    }
  }

  calculateTotal = (cartDetail) => {
    let total = 0;

    cartDetail.forEach(item => {
      total += parseInt(item.price, 10) * item.quantity
    });
    console.log('Total: ', total)

    this.setState({
      total,
      showTotal: true
    })
  }

  removeFromCart = (id) => {
    this.props.dispatch(removeCartItem(id))
      .then(() => {
        if(this.props.user.cartDetail.length <= 0) {
          console.log('less than or equal to 0!')
          this.setState({
            showTotal: false
          })
        } else {
          console.log(this.props.user.cartDetail)
          this.calculateTotal(this.props.user.cartDetail)
        }
      })
  }

  showNoItemsMessage = () => (
    <div className="cart_no_items">
      You have nothing in your cart
    </div>
  )
 
  render() {
    return (
      <UserLayout>
        <h1>Shopping Cart</h1>
        <div className="user_cart">
          <ProductBlock 
            products={this.props.user}
            type="cart"
            removeItem={(id) => this.removeFromCart(id)}
          />
          {this.state.showTotal ? 
            <div className="user_cart_sum">
              <div>
                Total amount: $ {this.state.total}
              </div>
            </div>
          :  
            this.state.showSuccess ? 
              <div className="cart_success">
                Thank you for your order!
              </div>
            :
          
          this.showNoItemsMessage()}
        </div>
        {
          this.state.showTotal ? 
            <div className="paypal_button_container">
              Paypal
            </div>
          :null
        }
      </UserLayout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(UserCart);