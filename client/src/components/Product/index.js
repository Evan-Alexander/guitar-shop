import React, { Component } from 'react'
import PageTop from '../utils/page_top';

import { connect } from 'react-redux';

import { getProductDetail, clearProductDetail } from '../../actions/product_actions';
import ProductInfo from './product_info';
import ProductImg from './productImage';

class ProductDetail extends Component {

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(getProductDetail(id)).then(response=>{
        if(!this.props.products.prodDetail){
            this.props.history.push('/');
        }
    })
  }

  componentWillUnmount() {
    this.props.dispatch(clearProductDetail());
  }

  render() {
    return (
      <div>
        <PageTop title="Product Detail"/>
        <div className="container product_detail_wrapper">
          {
            this.props.products.prodDetail ?
    
                <div className="row">
                  <div className="col-md-6">
                    <ProductImg 
                      detail={this.props.products.prodDetail}
                    />
                  </div>
                  <div className="col-md-6">
                    <ProductInfo 
                      addToCart={(id) => this.addToCartHandler(id)}
                      detail={this.props.products.prodDetail}
                    />
                  </div>
                </div>
          
            : 'Loading...'
          }
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(ProductDetail)