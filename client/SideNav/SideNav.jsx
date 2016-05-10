import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import LoginButton from './LoginButton.jsx';
import LogoutButton from './LogoutButton.jsx'

SideNav = React.createClass({
  componentDidMount: function() {
    $(".button-collapse").sideNav({
      closeOnClick: true,
      menuWidth: 325
    });
    $(".collapsible").collapsible();
  },
  
  _logout: function(){
    AccountsTemplates.logout();
  },
  
  userStatus: function() {
    if(!Meteor.loggingIn() && Meteor.user()) {
      return <LogoutButton />
    } else {
      return <LoginButton />
    }
  },
  
  render(){
    return(
     <nav>
      <ul id="slide-out" className="side-nav">
          {this.userStatus()}
        <li className="no-padding">
          <ul className="collapsible collapsible-accordion">
            <li>
              <a className="collapsible-header">Your Channels</a>
              <div className="collapsible-body">
                <ul>
                    <li><a href="">@test</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
        <li className="no-padding">
          <ul className="collapsible collapsible-accordion">
            <li>
              <a className="collapsible-header">Following Channels</a>
              <div className="collapsible-body">
                <ul>
                  <li><a href="/">test</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <a href="" data-activates="slide-out" className="button-collapse show-on-large"><i className="material-icons">menu</i></a>
    </nav>
  )
 }
});


export default SideNav;