import { Avatar, Button, Card, CircularProgress, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../redux/users-reducer';
import getInitials from '../../utils/getInitials';

type UsersFuncProps = {
pages: Array<number>,
onPageChanged: (page:number) => void,
currentPage: number,
totalUsersCount: number,
users : Array<UserType>,
unfollow: (id:number) => void,
follow: (id:number) => void,
isFetching: boolean
}

export const Usersfunc = (props: UsersFuncProps) => {

  return ( 
  <>
  <div style={{textAlign: 'center'}}>
    {props.pages.map( p => {
      return <span onClick={ () => props.onPageChanged(p)}
      style={props.currentPage === p ? {fontSize: "24px", fontWeight: "bold", color: 'black'} : {fontSize: "20px",color: 'grey'}}>
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
        {`Amount of members: ${props.totalUsersCount}`}
      </Typography>
    </Card>
    
    {props.isFetching ? <div style={{textAlign: 'center'}}><CircularProgress size="60px" color="secondary" /> </div> : null}
    {props.users.map(u => <Card style={{ marginTop: '10px' }} key={u.id}>

      <Grid container
        style={{ padding: '10px' }}
        justifyContent='space-between'>

        <Grid item>
          <NavLink to={"/profile/" + u.id}> 
            <Avatar src={u.photos.small != null ? u.photos?.small : ""}>
            {getInitials(u.name)}
          </Avatar>
          </NavLink>
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
            ? <Button variant="contained" color="primary" onClick={() => { props.unfollow(u.id) }}>Unfollow</Button>
            : <Button variant="contained" color="secondary" onClick={() => { props.follow(u.id) }}>Follow</Button>}
          <Button>Send message</Button>
        </Grid>
      </Grid>

    </Card>)}
  </>
)
}

