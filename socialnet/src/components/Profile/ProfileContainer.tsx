import React from 'react';
import { connect } from "react-redux";
import { Redirect, RouteComponentProps, withRouter } from 'react-router';
import { addPost,updateNewText, getUserProfileThunk } from '../../redux/profile-reducer';
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
  getUserProfileThunk: (userId: string) => void, 
}
type MapStatePropsType = {
  profile: any,
  posts: Array<PostType>,
  newPostText: string,
  isAuth: boolean,
}
export type ProfilePagePropsType = MapStatePropsType & MapDispatchToPropsType & OwnPropsType
type CommonPropsType = RouteComponentProps<PathParamsType> & ProfilePagePropsType 

class ProfileAPI extends React.Component<CommonPropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '2'
    } 
    this.props.getUserProfileThunk(userId)
  }

  render() {
    if (this.props.isAuth === false) return <Redirect to={"/login"} />
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
    newPostText: state.profilePage.newPostText,
    isAuth: state.auth.isAuth
  } 
}

let WithURLdataContainer = withRouter(ProfileAPI)
export const ProfileContainer = connect<MapStatePropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
  addPost,
  updateNewText,
  getUserProfileThunk
})(WithURLdataContainer)