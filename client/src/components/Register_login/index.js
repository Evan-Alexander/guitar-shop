import React from 'react'
import CustomButton from '../utils/button';
import Login from './Login';

const RegisterLogin = () => {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container row">
          <div className="col-sm-6 col-lg-6">
            <h1>New Customers</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum animi ratione saepe eveniet rem nisi perferendis error pariatur inventore excepturi porro fugit quis numquam, natus explicabo ullam nobis praesentium itaque.</p>
            <CustomButton 
              type="default"
              title="Create an account"
              linkTo="/register"
              addStyles={{
                margin:'1em 0 0 0'
              }}
            />
          </div>
          <div className="col-sm-6 col-lg-6">
            <h2>Registered Customers</h2>
            <p>If you have an account, please log in.</p>
            <Login />
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default RegisterLogin 
