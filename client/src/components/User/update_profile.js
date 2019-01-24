import React from 'react'
import UserLayout from '../../hoc/user_layout';
import UpdateUserInfo from './update_user_info';

const UpdateProfile = () => {
  return (
    <UserLayout>
      <h1>Profile</h1>
      <UpdateUserInfo />
    </UserLayout>
  )
}

export default UpdateProfile
