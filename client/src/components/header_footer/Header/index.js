import React, { Component } from 'react'

class Header extends Component {
  render() {
    return <header className="bck_b_light">
        <div className="container">
          <div class="row">
            <div class="col-3">
              <div className="logo">Waves</div>
            </div>
            <div class="col-9 right">
              <div className="top">Links</div>
              <div className="bottom">Links</div>
            </div>

          </div>
          {/* <div className="left">
            <div className="logo">Waves</div>
          </div>
          <div className="right">

          </div> */}
        </div>
      </header>;
  }
}
export default Header;