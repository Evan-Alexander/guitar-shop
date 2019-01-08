import React, { Component } from 'react'
import CustomButton from './button';

class Card extends Component {

  renderCardImage(images) {
    if (images.length > 0) {
      return images[0].url;
    } else {
      return '/images/image_not_availble.png'
    }
  }

  render() {
    const props = this.props;

    return (
      <div className={`card_item_wrapper ${props.grid}`}>
        <div
          className="image"
          style={{
            background: `url(${this.renderCardImage(props.images)}) no-repeat`
          }}
        ></div>
        <div className="action_container">
          <div className="tags">
            <div className="brand">{props.brand.name}</div>
            <div className="name">{props.name}</div>
            <div className="price">${props.price}</div>
          </div>

          {
            props.grid ?
              <div className="description">
                <p>{props.description}</p>
            </div>
              : null
          }
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
                  console.log('added to cart')
                }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Card;