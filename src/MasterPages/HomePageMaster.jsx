import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderHome from '../component/Router/HeaderHome';

const HomePageMaster = () => {
  return (
    <div>
      <HeaderHome />
      <Outlet />
    </div>
  );
}

export default HomePageMaster