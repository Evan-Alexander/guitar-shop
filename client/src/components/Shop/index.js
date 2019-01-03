import React, { Component } from 'react';
import PageTop from '../utils/page_top';

import { connect } from 'react-redux';
import { getBrands, getWoodType } from '../../actions/product_actions';

import CollapsableCheckboxes from '../utils/collapsableCheckboxes';

class Shop extends Component {

  componentDidMount() {
    this.props.dispatch(getBrands());
    this.props.dispatch(getWoodType());
  }

  handleFilters = (filters, category) => {
    console.log(filters);

  }
  render() {
    const products = this.props.products;

    return (
      <div>
        <PageTop 
          title="Browse Products"
        />
        <div className="container">
          <div className="shop_wrapper">
            <div className="left">

              <CollapsableCheckboxes 
                initState={true}
                title="Brands"
                list={products.brands}
                handleFilters={(filters) => this.handleFilters(filters, 'brand')}
              />
              {/* <CollapsableCheckboxes 
                initState={false}
                title="Frets"
                list={frets}
                handleFilters={(filters) => this.handleFilters(filters, 'frets')}
              /> */}
            </div>
            <div className="right">
              right
            </div>
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(Shop);