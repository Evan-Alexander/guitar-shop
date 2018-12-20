import React from 'react'
import CustomButton from '../utils/button';

function HomePromotion() {
  const promotion = {
    img: '/images/featured/featured_home_3.jpg',
    lineOne: 'Up to 40% off',
    lineTwo: 'On Second Hand Guitars',
    linkTitle: 'Shop now',
    linkTo: '/shop'
  }

  const renderPromotions = () => (
    promotion ? 
      <div 
        className="home_promotion_img"
        style={{
          background: `url(${promotion.img})`
        }}
      >
        <div className="tag title">
          {promotion.lineOne}
        </div>
        <div className="tag low_title">
          {promotion.lineTwo}
        </div>
        <div>
          <CustomButton
            type="default"
            title={promotion.linkTitle}
            linkTo={promotion.linkTo}
          />
        </div>
      </div>
    :null
  )

  return (
    <div className="home_promotion">
      { renderPromotions() }
    </div>
  )
}

export default HomePromotion
