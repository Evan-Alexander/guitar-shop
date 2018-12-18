import React from 'react'
import UserLayout from '../../hoc/user_layout';
import CustomButton from '../utils/button';

function UserDashboard() {
  return (
    <UserLayout>
      <div className="user_nfo_panel">
        <h1>User Information</h1>
        <div>
          <span>name</span>
          <span>lastname</span>
          <span>email</span>
        </div>
        <CustomButton 
          type="default"
          title="Edit account info"
          linkTo="/user/user_profile"
        />
      </div>
      <div className="user_nfo_panel">
        <h1>Purchase history</h1>
        <div className="user_product_block_wrapper">
          history
        </div>

      </div>
    </UserLayout>
  )
}

export default UserDashboard
