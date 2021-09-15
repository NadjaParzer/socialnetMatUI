import axios from 'axios';
import React from 'react';
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from 'react-router';
import { addPost,updateNewText, setUserProfile } from '../../redux/profile-reducer';
import { AppStateType } from '../../redux/redux-store';
import { PostType } from './MyPosts/MyPosts';
import { Profile } from './Profile';

type OwnPropsType = {}
type PathParamsType = {
  userId: string
}
type MapDispatchToPropsType = {
  addPost: () => void,
  updateNewText: (newText: string) => void,
  setUserProfile: (profile: any) => void 
}
type MapStatePropsType = {
  profile: any,
  posts: Array<PostType>,
  newPostText: string
}
type ProfilePagePropsType = MapStatePropsType & MapDispatchToPropsType & OwnPropsType
type CommonPropsType = RouteComponentProps<PathParamsType> & ProfilePagePropsType 

class ProfileAPI extends React.Component<CommonPropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '2'
    } 
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        console.log(response)
        this.props.setUserProfile(response.data)
      }) 
  }

  render() {
    return (
      <>
        <Profile {...this.props} profile={this.props.profile}/>
      </>
    )
  }
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  } 
}

let WithURLdataContainer = withRouter(ProfileAPI)
export const ProfileContainer = connect<MapStatePropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
  addPost,
  updateNewText,
  setUserProfile
})(WithURLdataContainer)