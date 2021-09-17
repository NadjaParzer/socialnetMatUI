import { Avatar, Button, Card, CircularProgress, Grid, Typography } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';
import { UserType } from '../../redux/users-reducer';
import getInitials from '../../utils/getInitials';

type UsersFuncProps = {
  pages: Array<number>,
  onPageChanged: (page: number) => void,
  currentPage: number,
  totalUsersCount: number,
  users: Array<UserType>,
  unfollow: (id: number) => void,
  follow: (id: number) => void,
  isFetching: boolean,
  //toggleisFollowing: (isFetching: boolean, userId: number) => void,
  followingInProgress: Array<number>,
  followThunk: (id: number) => void,
  unfollowThunk: (id: number) => void,
}

export const Usersfunc = (props: UsersFuncProps) => {

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        {props.pages.map(p => {
          return <span onClick={() => props.onPageChanged(p)}
            style={props.currentPage === p ? { fontSize: "24px", fontWeight: "bold", color: 'black' } : { fontSize: "20px", color: 'grey' }}>
            {` ${p} `}
          </span>
        })}
      </div>
      <Card style={{ marginBottom: '50px' }} >
        <Typography variant='h6' style={{ color: 'primary' }} >
          {`Amount of members: ${props.totalUsersCount}`}
        </Typography>
      </Card>

      {props.isFetching ? <div style={{ textAlign: 'center' }}><CircularProgress size="60px" color="secondary" /> </div> : null}
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
              ? <Button variant="contained" disabled={props.followingInProgress.some(id => id === u.id)} color="primary" onClick={() => {
                props.unfollowThunk(u.id)
              }}>Unfollow</Button>
              : <Button variant="contained" disabled={props.followingInProgress.some(id => id === u.id)} color="secondary" onClick={() => {
                props.followThunk(u.id)
              }
              }>Follow</Button>}
            <Button>Send message</Button>
          </Grid>
        </Grid>

      </Card>)}
    </>
  )
}

