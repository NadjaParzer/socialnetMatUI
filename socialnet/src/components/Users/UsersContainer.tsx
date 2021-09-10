import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { followAC, setUsersAC, unfollowAC, UsersPageType, UserType } from "../../redux/users-reducer";
import { Users } from "./Users";
import { Dispatch } from "redux";

type MapDispatchToPropsType = {
  follow: (id:number) => void,
  unFollow: (id:number) => void,
  setUsers: (users: Array<UserType>) => void
}
type MapStatePropsType = {
  users: Array<UserType>
}

export type UsersPagePropsType = MapStatePropsType & MapDispatchToPropsType


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: state.usersPage.users
  } 
}

let mapDispatchToProps = (dispatch:Dispatch): MapDispatchToPropsType => {
  return {
    follow: (userId: number) => {dispatch(followAC(userId))},
    unFollow: (userId: number) => {dispatch(unfollowAC(userId))},
    setUsers: (users: Array<UserType>) => {dispatch(setUsersAC(users))}
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
