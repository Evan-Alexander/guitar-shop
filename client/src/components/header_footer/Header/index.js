import React, { Component } from 'react'
// The routes have access to the authentication, BUT because the routes are 
// child components to the layout and the Header is within the Layout component
// we need to bring redux into the header component for Auth
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/user_actions';

class Header extends Component {

  state = {
    page:  [
      {
        name: 'Home',
        linkTo: '/',
        public: true
      },
      {
        name: 'Guitars',
        linkTo: '/shop',
        public: true
      }
    ],
    user: [
      {
        name: 'My Cart',
        linkTo: '/user/cart',
        public: false
      },
      {
        name: 'My Account',
        linkTo: '/user/dashboard',
        public: true
      },
      {
        name: 'Log in',
        linkTo: '/register_login',
        public: true
      },
      {
        name: 'Log out',
        linkTo: '/use/logout',
        public: false
      }
    ]
  }

  logoutHandler = () => {
    this.props.dispatch(logoutUser()).then(response => {
      if(response.payload.success) {
        this.props.history.push('/')
      }
    })
  }

  cartLink = (item, i) => {
    const user = this.props.user.userData;

    return (
      <div className="cart_link" key={i}>
        <span>{user.cart ? user.cart.length: 0}</span>
        <Link to={item.linkTo}>
          {item.name}
        </Link>
      </div>
    )
  }

  defaultLink = (item, i) => (
    item.name === 'Log out' ?
    <div 
      className="log_out_link"
      key={i}
      onClick={() => this.logoutHandler()}  
    >
      {item.name}
    </div>
    :
    <Link to={item.linkTo} key={i}>{item.name}</Link>
  )

  showLinks = (type) => {
    let list = [];

    if(this.props.user.userData) {
      type.forEach((item) => {
        if(!this.props.user.userData.isAuth) {
          if(item.public) {
            list.push(item)
          }
        } else {
          if(item.name !== 'Log in') {
            list.push(item)
          }
        }
      });
    }
    return list.map((item, i) => {
      if(item.name !== 'My Cart') {
        return this.defaultLink(item, i);
      } else {
        return this.cartLink(item, i);
      }
    })
  }

  render() {
    return <header className="bck_b_light">
        <div className="container-fluid">
          <div className="row">

            <div className="col-sm-4 col-xs-12">
              <div className="logo">Waves</div>
            </div>

            <div className="col-sm-8 col-xs-12 right">
              <div className="top">
                {this.showLinks(this.state.user)}
              </div>
              <div className="bottom">
                {this.showLinks(this.state.page)}
              </div>
            </div>

          </div>
        </div>
      </header>;
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(withRouter(Header));