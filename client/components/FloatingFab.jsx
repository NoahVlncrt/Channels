import React from 'react';


export default class FloatingFab extends React.Component{
  render(){
    return(
      <div className="fixed-action-btn" style={{bottom: '45px', right: '24px',}}>
          <a className="btn-floating btn-large red">
            <i className="large material-icons">add</i>
          </a>
        <ul>
          <li><a href="/create/channel" className="btn-floating blue"><i className="material-icons">dashboard</i></a></li>
          <li><a href="/create/post" className="btn-floating orange"><i className="material-icons">create</i></a></li>
          <li><a href="/create/announcement" className="btn-floating green"><i className="material-icons">announcement</i></a></li>
        </ul>
      </div>
    )
  }
}