import React from 'react';

import SideNav from './components/SideNav.jsx';
import FloatingFab from './components/FloatingFab.jsx';

export const MainLayout = ({content}) => (
  <div className="test">
    <SideNav />
    <FloatingFab />
  </div>
)