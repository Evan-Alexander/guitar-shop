import React, { Component } from 'react';
import HomeSlider from './home_slider';
import HomePromotion from './home_promotions';

import { connect } from 'react-redux';
import { getProductsByAmountSold, getProductsByArrival } from '../../actions/product_actions';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getProductsByAmountSold());
    this.props.dispatch(getProductsByArrival());
  }
  render() {
    return (
      <div>
        <HomeSlider />
        <HomePromotion />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}
export default connect(mapStateToProps)(Home);