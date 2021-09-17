import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { follow, setCurrentPage, followThunk, unfollowThunk,  unfollow, UserType,getUsersThunkCreator, toggleisFollowing } from "../../redux/users-reducer";
import  { UserClassAPIComponent} from "./UsersClassAPIContainer";

type OwnPropsType = {

}

type MapDispatchToPropsType = {
  follow: (id:number) => void,
  unfollow: (id:number) => void,
  // setUsers: (users: Array<UserType>) => void,
  setCurrentPage: (currentPage: number) => void,
  // setUsersTotalCount: (totalCount: number) => void,
  // toggleIsFetching: (isFetching: boolean) => void,
  //toggleisFollowing: (isFetching: boolean, userId: number) => void,
  getUsersThunkCreator: (currentPage: number, pageSize: number) => void,
  followThunk: (userId: number) => void,
  unfollowThunk: (userId: number) => void,
}
type MapStatePropsType = {
  users: Array<UserType>,
  pageSize: number,
  totalUsersCount: number,
  currentPage: number,
  isFetching: boolean,
  followingInProgress: Array<number>,
}

export type UsersPagePropsType = MapStatePropsType & MapDispatchToPropsType & OwnPropsType


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    
  } 
}

// let mapDispatchToProps = (dispatch:Dispatch): MapDispatchToPropsType => {
//   console.log('users.container')
//   return {
//     follow: (userId: number) => {dispatch(follow(userId))},
//     unfollow: (userId: number) => {dispatch(unfollow(userId))},
//     setUsers: (users: Array<UserType>) => {dispatch(setUsers(users))},
//     setCurrentPage: (currentPage: number) => {dispatch(setCurrentPage(currentPage))},
//     setUsersTotalCount: (totalCount: number) => {dispatch(setUsersTotalCount(totalCount))},
//     toggleIsFetching: (isFetching: boolean) => {dispatch(toggleIsFetching(isFetching))}
//   }
// }
// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserClassAPIComponent)

export const UsersContainer = connect<MapStatePropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
  follow,
  unfollow,
  // setUsers,
  setCurrentPage,
  // setUsersTotalCount,
  // toggleIsFetching,
  //toggleisFollowing,
  getUsersThunkCreator,
  followThunk,
  unfollowThunk
})(UserClassAPIComponent)
