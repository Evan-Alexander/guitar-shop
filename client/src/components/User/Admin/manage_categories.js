import React from 'react'
import UserLayout from '../../../hoc/user_layout';
import ManageBrands from './manage_brands';
import ManageWood from './manage_wood';

const ManageCategories = () => {
  return (
    <UserLayout>
      <ManageBrands />
      <ManageWood />
    </UserLayout>
  )
}

export default ManageCategories
