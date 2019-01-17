import React from "react";

import CustomButton from "../utils/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShippingFast } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ProductInfo = props => {
  const detail = props.detail;

  const showProdTags = () => (
    <div className="product_tags">
      {detail.shipping ? (
        <div className="tag">
          <div>
            <FontAwesomeIcon icon={faShippingFast} />
          </div>
          <div className="tag_text">
            <div>Free shipping</div>
            <div>And return</div>
          </div>
        </div>
      ) : null}

      <div className="tag">
        <div>
          <FontAwesomeIcon icon={detail.available ? faCheck : faTimes} />
        </div>
        {detail.available ? (
          <div className="tag_text">
            <div>Available</div>
            <div>in store</div>
          </div>
        ) : (
          <div className="tag_text">
            <div>Not available</div>
            <div>Preorder only</div>
          </div>
        )}
      </div>
    </div>
  );

  const showProdActions = (detail) => (
    <div className="product_action">
      <div className="price">$ {detail.price}</div>
      <div className="cart">
        <CustomButton 
          type="add_to_cart_link"
          runAction={() => {
            console.log('add to cart')
          }}
        />
      </div>
    </div>
  )

  const showProdSpecifications = (detail) => (
    <div className="product_specifications">
      <h2>Specs:</h2>
      <div className="item">
        <strong>Frets: </strong> {detail.frets}
      </div>
      <div className="item">
        <strong>Type of Wood: </strong> {detail.wood.name}
      </div>
    </div>
  )

  return (
    <div className="product_info_top">
      <h1>
        {detail.brand.name} {detail.name}
      </h1>
      <p>{detail.description}</p>
      {showProdTags(detail)}
      {showProdActions(detail)}
      {showProdSpecifications(detail)}
    </div>
  );
};

export default ProductInfo;
