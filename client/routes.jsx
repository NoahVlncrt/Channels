import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './MainLayout.jsx'
import App from '../App.jsx'

FlowRouter.route('/',{
  action(){
    mount(MainLayout, {
      content: (<App />)
    })
  }
});
AccountsTemplates.configureRoute('signIn', {
  layoutType: 'blaze',
  name: 'signin',
  path: '/login',
  layoutTemplate: 'blank',
  contentRegion: 'content'
});
AccountsTemplates.configureRoute('signUp', {
  layoutType: 'blaze',
  name: 'signup',
  path: '/signup',
  layoutTemplate: 'blank',
  contentRegion: 'content'
});