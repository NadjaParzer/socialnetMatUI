import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC, UsersPageType, UserType } from "../../redux/users-reducer";
import { Users } from "./Users";
import { Dispatch } from "redux";
import  {UserClass} from "./UsersClass";


type MapDispatchToPropsType = {
  follow: (id:number) => void,
  unFollow: (id:number) => void,
  setUsers: (users: Array<UserType>) => void,
  setCurrentPage: (currentPage: number) => void,
  setUsersTotalCount: (totalCount: number) => void
}
type MapStatePropsType = {
  users: Array<UserType>,
  pageSize: number,
  totalUsersCount: number,
  currentPage: number
}

export type UsersPagePropsType = MapStatePropsType & MapDispatchToPropsType


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  } 
}

let mapDispatchToProps = (dispatch:Dispatch): MapDispatchToPropsType => {
  console.log('users.container')
  return {
    follow: (userId: number) => {dispatch(followAC(userId))},
    unFollow: (userId: number) => {dispatch(unfollowAC(userId))},
    setUsers: (users: Array<UserType>) => {dispatch(setUsersAC(users))},
    setCurrentPage: (currentPage: number) => {dispatch(setCurrentPageAC(currentPage))},
    setUsersTotalCount: (totalCount: number) => {dispatch(setUsersTotalCountAC(totalCount))}
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserClass)
