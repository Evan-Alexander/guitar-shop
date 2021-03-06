import React, { Component } from "react";
import CustomButton from "./button";
import { connect } from "react-redux";
import { addToCart } from "../../actions/user_actions";
import { Link } from 'react-router-dom';

class Card extends Component {
  renderCardImage(images) {
    if (images.length > 0) {
      return images[0].url;
    } else {
      return "/images/image_not_availble.png";
    }
  }

  render() {
    const props = this.props;

    return (
      <div className={`card_item_wrapper ${props.grid}`}>
        <Link to={`/product_detail/${props._id}`}>
        <div
          className="image"
          style={{
            background: `url(${this.renderCardImage(props.images)}) no-repeat`
          }}
        />
        </Link>


        <div className="action_container">
          <div className="tags">
            <div className="brand">{props.brand.name}</div>
            <div className="name">{props.name}</div>
            <div className="price">${props.price}</div>
          </div>

          {props.grid ? (
            <div className="description">
              <p>{props.description}</p>
            </div>
          ) : null}
          <div className="actions">
            <div className="button_wrapp">
              <CustomButton
                type="default"
                altClass="card_link"
                title="View Product"
                linkTo={`/product_detail/${props._id}`}
              />
            </div>
            <div className="button_wrapp">
              <CustomButton
                type="bag_link"
                runAction={() => {
                  props.user.userData.isAuth
                    ? this.props.dispatch(addToCart(props._id))
                    : console.log("you need to log in");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Card);
