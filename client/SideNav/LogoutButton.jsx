import React from 'react';

import LoginButton from './LoginButton.jsx'

LogoutButton = React.createClass({
  logout(){
    AccountsTemplates.logout();
  },
  
  render(){
    return(
      <li><a href="#" onClick={this.logout}>Logout</a></li>
    )
  }
})

export default LogoutButton;