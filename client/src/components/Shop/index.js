import React, { Component } from 'react';
import PageTop from '../utils/page_top';

import { frets, price } from '../utils/Form/fixed_categories';

import { connect } from 'react-redux';
import { getBrands, getWoodType } from '../../actions/product_actions';

import CollapsableCheckboxes from '../utils/collapsableCheckboxes';
import CollapsableRadios from '../utils/collapsableRadios';

class Shop extends Component {

  state = {
    grid: '',
    limit: 6,
    skip: 0,
    filters: {
      brand: [],
      frets: [],
      wood: [],
      price: []
    }
  }
  componentDidMount() {
    this.props.dispatch(getBrands());
    this.props.dispatch(getWoodType());
  }

  handlePrice = value => {
    const data = price;
    let array = [];

    for(let key in data) {
      if(data[key]._id === parseInt(value, 10)) {
        array = data[key].array
      }
    }
    
    return array;
  }

  handleFilters = (filters, category) => {
    const newFilters = {...this.state.filters}
    newFilters[category] = filters;

    if(category === "price") {
      let priceValues = this.handlePrice(filters);
      newFilters[category] = priceValues
    }
    this.setState({
      filters: newFilters
    })
    console.log(this.state.filters)

  }
  render() {
    console.log(this.state.filters);
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
              <CollapsableCheckboxes 
                initState={false}
                title="Frets"
                list={frets}
                handleFilters={(filters) => this.handleFilters(filters, 'frets')}
              />
              <CollapsableCheckboxes 
                initState={true}
                title="Wood"
                list={products.woodType}
                handleFilters={(filters) => this.handleFilters(filters, 'wood')}
              />
              <CollapsableRadios 
                initState={true}
                title="Price"
                list={price}
                handleFilters={(filters) => this.handleFilters(filters, 'price')}
              />
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