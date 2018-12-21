import React, { Component } from 'react';
import HomeSlider from './home_slider';
import HomePromotion from './home_promotions';
import CardBlock from '../utils/card_block';

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
        <CardBlock 
          list={this.props.products.bySold}
          title="Best Selling Guitars"
        />
        <HomePromotion />
        <CardBlock 
          list={this.props.products.byArrival}
          title="New Arrivals"
        />
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