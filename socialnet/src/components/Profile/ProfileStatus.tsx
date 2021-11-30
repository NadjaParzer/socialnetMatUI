import React from 'react';
import {Typography } from "@material-ui/core";


type ProfileStatusType = {
  status: string
}

class ProfileStatus extends React.Component<ProfileStatusType> {
  state = {
    editmode: false
  }
  enterStatus () {}
  render () {
    return (
    <div>
      {!this.state.editmode && 
      <span onDoubleClick={enterStatus}><Typography >{this.props.status}</Typography></span>
      
      }
      {this.state.editmode && 
      <input value={this.props.status}></input>
      }
    </div>
  )
  }
}
export default ProfileStatus