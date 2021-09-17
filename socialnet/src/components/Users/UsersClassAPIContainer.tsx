import React from "react";
import { UsersPagePropsType } from './UsersContainer';
import { Usersfunc } from "./UsersFunc";

export class UserClassAPIComponent extends React.Component<UsersPagePropsType> {
  // constructor(props: UsersPagePropsType) {
  //   super(props);
  // }
  componentDidMount () {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    // //this.props.toggleIsFetching(true)
    // if (this.props.users.length === 0) {
    //   usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
    //       this.props.setUsers(response.items)
    //       this.props.setUsersTotalCount(response.totalCount)
    //     })
    // }
  }
  onPageChanged = (p: number) => {
    this.props.getUsersThunkCreator(p, this.props.pageSize)
    // this.props.setCurrentPage(p)
    // this.props.toggleIsFetching(true)
    // usersAPI.getUsers(p, this.props.pageSize).then(response => {
    //       this.props.toggleIsFetching(false)
    //       this.props.setUsers(response.items)
    //     })
  }
  render() {
    let amountOfPages = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for (let i=1; i< amountOfPages; i++) {
      pages.push(i)
    }

    return <Usersfunc pages={pages} 
                      onPageChanged={this.onPageChanged}
                      currentPage = {this.props.currentPage}
                      totalUsersCount = {this.props.totalUsersCount}
                      users = {this.props.users}
                      follow= {this.props.follow}
                      unfollow= {this.props.unfollow}
                      isFetching= {this.props.isFetching}
                      followingInProgress={this.props.followingInProgress}
                      //toggleisFollowing={this.props.toggleisFollowing}
                      followThunk={this.props.followThunk}
                      unfollowThunk={this.props.unfollowThunk}
                      />
  }
}