import React from "react";
import { Avatar, Button, Card, Grid, Typography } from '@material-ui/core'
import axios from 'axios'
import getInitials from '../../utils/getInitials'
import { UsersPagePropsType } from './UsersContainer'

export class UserClass extends React.Component<UsersPagePropsType> {
  // constructor(props: UsersPagePropsType) {
  //   super(props);
    
  // }

  componentDidMount () {
    if (this.props.users.length === 0) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          console.log(response)
          this.props.setUsers(response.data.items)
          this.props.setUsersTotalCount(response.data.totalCount)
        })
    }
  }

  componentDidUpdate () {

  }

  onPageChanged = (p: number) => {
    this.props.setCurrentPage(p)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
        .then(response => {
          console.log(response)
          this.props.setUsers(response.data.items)
        })
  }
  // onTest = () => {
  //   axios.get('localhost:7005/test')
  //     .then(res => {
  //       console.log(res)
  //     })
  // }

  render() {
    let amountOfPages = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for (let i=1; i< amountOfPages; i++) {
      pages.push(i)
    }
    return (
      <>
      <div style={{textAlign: 'center'}}>
        {pages.map( p => {
          return <span onClick={ () => this.onPageChanged(p)}
          style={this.props.currentPage === p ? {fontSize: "24px", fontWeight: "bold", color: 'black'} : {fontSize: "20px",color: 'grey'}}>
            {` ${p} `}
            </span>
        })}
      </div>
        {/* <div>
          <Button onClick={() => this.onTest()}>TEST</Button>
        </div> */}
      
        {/* <Button style={{ backgroundColor: 'grey' }} onClick={this.getUsers}>Get Users</Button> */}
        <Card style={{ marginBottom: '50px' }} >
          <Typography variant='h6' style={{ color: 'primary' }} >
            {`Amount of members: ${this.props.totalUsersCount}`}
          </Typography>
        </Card>
        

        {this.props.users.map(u => <Card style={{ marginTop: '10px' }} key={u.id}>

          <Grid container
            style={{ padding: '10px' }}
            justifyContent='space-between'>

            <Grid item>
              <Avatar src={u.photos.small != null ? u.photos?.small : ""}>
                {getInitials(u.name)}
              </Avatar>
              <Typography>
                {u.name}
              </Typography>
              <Typography>
                {`Location: `}
              </Typography>
              <Typography>
                {`Status: ${u.status}`}
              </Typography>
            </Grid>
            <Grid item>
              {u.followed
                ? <Button variant="contained" color="primary" onClick={() => { this.props.unFollow(u.id) }}>Unfollow</Button>
                : <Button variant="contained" color="secondary" onClick={() => { this.props.follow(u.id) }}>Follow</Button>}
              <Button>Send message</Button>
            </Grid>
          </Grid>

        </Card>)}
      </>
    )
  }
}