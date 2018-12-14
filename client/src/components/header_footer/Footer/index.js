import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return <footer className="bck_b_dark">
      <div className="container">
        <div className="logo">Waves</div>
        <div className="row">
          <div className="col-sm-6 col-lg-6 text-light-grey">
            <h2>Contact Information</h2>
            <div className="row margin-b3">
              <div className="col">
                <div className="nfo">
                  <span>
                    <FontAwesomeIcon icon={faCompass} className="icon" /> Address
                  </span>
                  <div>Cowboy 2345 N Giddyup Rd.</div>
                </div>
              </div>
              <div className="col">
                <div className="nfo">
                  <span>
                    <FontAwesomeIcon icon={faPhone} className="icon" /> Phone
                  </span>
                  <div>(503)292-2929</div>
                </div>
              </div>
            </div>
            <div className="row margin-b3">
              <div className="col">
                <div className="nfo">
                  <span>
                    <FontAwesomeIcon icon={faClock} className="icon" /> Working Hours
                  </span>
                  <div>Mon-Sun / 9am-6pm</div>
                </div>
              </div>
              <div className="col">
                <div className="nfo">
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} className="icon" /> Email
                  </span>
                  <div>info@waves.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-6 text-light-grey">
            <h2>Be The First to Know</h2>
            <div>
              Get all the latest information on events, sales, and offers.  You can't miss out!
            </div>
          </div>
        </div>
      </div>
    </footer>;
}

export default Footer
