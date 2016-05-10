import React from 'react';
import {mount} from 'react-mounter';
import Blaze from 'meteor/gadicc:blaze-react-component';

import {MainLayout} from './MainLayout.jsx';
import {BlankLayout} from './BlankLayout.jsx';

FlowRouter.route('/',{
  action(){
    mount(MainLayout)
  }
});
FlowRouter.route('/login',{
  action(){
    mount(BlankLayout, {
      content: (<Blaze template="atForm"/>)
    })
  }
})