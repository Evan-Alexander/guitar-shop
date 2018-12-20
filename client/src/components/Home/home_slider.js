import React from 'react'
import Slider from 'react-slick';
import CustomButton from '../utils/button';

const HomeSlider = (props) => {
  const slides = [
    {
      img: '/images/featured/featured_home.jpg',
      lineOne: 'Fender',
      lineTwo: 'Custom shop',
      linkTitle: 'Shop now',
      linkTo: '/shop'
    },
    {
      img: '/images/featured/featured_home_2.jpg',
      lineOne: 'B-Stock',
      lineTwo: 'Awesome Discounts',
      linkTitle: 'View Offers',
      linkTo: '/shop'
    },
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }

  const generateSlides = () => (
    slides ?
      slides.map((item, i) => (
        <div key={i}>
          <div className="featured_image"
            style={{
              background: `url(${item.img})`
            }}
          >
            <div className="featured_action">
              <div className="tag title">
                {item.lineOne}
              </div>
              <div className="tag low_title">
                {item.lineTwo}
              </div>
              
                <CustomButton
                  type="default"
                  title={item.linkTitle}
                  linkTo={item.linkTo}
                />
              
            </div>
          </div>
        </div>
      ))
      : null
  )

  return (
    <div className="featured_container">
      <Slider {...settings}>
        {generateSlides()}
      </Slider>
    </div>
  )
}

export default HomeSlider
