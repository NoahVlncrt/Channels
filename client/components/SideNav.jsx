import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class SideNav extends TrackerReact(React.Component) {
  UserInfo(){
    return
  }
 render(){
   return(
     <nav>
      <ul id="slide-out" className="side-nav">
          <li><a href="#" className="logout">Logout</a></li>
          <li><a href="/login" className="login">Login/Signup</a></li>
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
                  <li><a href="">test</a></li>
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
}