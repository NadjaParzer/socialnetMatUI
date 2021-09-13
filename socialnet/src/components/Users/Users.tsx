import React from "react";
import { Avatar, Button, Card, Grid, Typography } from '@material-ui/core'
import axios from 'axios'
import { useState } from 'react'
import getInitials from '../../utils/getInitials'
import { UsersPagePropsType } from './UsersContainer'


export let Users = (props: UsersPagePropsType) => {
    let [totalCount, setCount] = useState(0)
    
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
            console.log(response)
            props.setUsers(response.data.items)
            setCount(response.data.totalCount) 
        })
     }
    
    console.log('users')
    return (
        <>
            <Card style={{marginBottom: '50px'}} >
                <Typography variant='h6'  style={{color: 'primary'}} >
                    {`Amount of members: ${totalCount}`}
                </Typography>
            </Card>
                
           
            {props.users.map(u => <Card style={{ marginTop: '10px' }} key={u.id}>

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
                            ? <Button variant="contained" color="primary" onClick={() => { props.unFollow(u.id) }}>Unfollow</Button>
                            : <Button variant="contained" color="secondary" onClick={() => { props.follow(u.id) }}>Follow</Button>}
                        <Button>Send message</Button>
                    </Grid>
                </Grid>

            </Card>)}
        </>
    )
}
