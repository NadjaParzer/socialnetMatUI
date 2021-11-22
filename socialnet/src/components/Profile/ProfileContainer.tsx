import React from 'react';
import { connect } from "react-redux";
import { Redirect, RouteComponentProps, withRouter } from 'react-router';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
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
// withRouter - для того, чтобы сохранялось id выбранного пользователя, аналог location в хуках
// закидываются данные из url (id)
// добавляются в пропсы объекты match (совпадение урла с роутерами), location, history
//////////////////////
// let WithURLdataContainer = withRouter(ProfileAPI)
// export const ProfileContainer = withAuthRedirect(connect<MapStatePropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
//   addPost,
//   updateNewText,
//   getUserProfileThunk
// })(WithURLdataContainer))

export const ProfileContainer = compose<React.ComponentType>(
  //withAuthRedirect,
  connect<MapStatePropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    addPost,
    updateNewText,
    getUserProfileThunk
  }),
  withRouter
)(ProfileAPI)