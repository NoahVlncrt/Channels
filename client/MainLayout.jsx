import React from 'react';

import SideNav from './components/SideNav.jsx';

export const MainLayout = ({content}) => (
  <div className="test">
    <SideNav />
    {content}
  </div>
)