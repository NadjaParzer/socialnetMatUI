import React from "react";
import axios from 'axios';
import { UsersPagePropsType } from './UsersContainer';
import { Usersfunc } from "./UsersFunc";

export class UserClassAPIComponent extends React.Component<UsersPagePropsType> {
  // constructor(props: UsersPagePropsType) {
  //   super(props);
  // }

  componentDidMount () {
    //this.props.toggleIsFetching(true)
    if (this.props.users.length === 0) {
      console.log(this.props.currentPage, this.props.pageSize)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          console.log(response)
          //this.props.toggleIsFetching(false)
          this.props.setUsers(response.data.items)
          this.props.setUsersTotalCount(response.data.totalCount)
        })
    }
  }

  onPageChanged = (p: number) => {
    this.props.setCurrentPage(p)
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.toggleIsFetching(false)
          this.props.setUsers(response.data.items)
        })
  }

  render() {
    let amountOfPages = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for (let i=1; i< amountOfPages; i++) {
      pages.push(i)
    }
    return <>
  
    <Usersfunc pages={pages} 
                      onPageChanged={this.onPageChanged}
                      currentPage = {this.props.currentPage}
                      totalUsersCount = {this.props.totalUsersCount}
                      users = {this.props.users}
                      follow= {this.props.follow}
                      unfollow= {this.props.unfollow}
                      isFetching= {this.props.isFetching}
                      />
    </>
    
  }
}