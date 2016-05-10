import React from 'react';

import SideNav from './SideNav/SideNav.jsx';
import FloatingFab from './components/FloatingFab.jsx';

export const MainLayout = ({content}) => (
  <div>
    <SideNav />
    <FloatingFab />
    {content}
  </div>
)