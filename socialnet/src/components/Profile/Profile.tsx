import React from 'react';
import { Avatar, Button, Container, Grid, Typography } from "@material-ui/core";
import {useStyles} from '../../AppCss';
import { MyPosts } from './MyPosts/MyPosts';

export function Profile () {
    const s = useStyles()
    return (
        <div>
        <Grid container spacing={5} justify="center" >
          <Grid item xs={3}>
            <Avatar className={s.avatarLarge} variant="rounded">NZ</Avatar>
          </Grid>
          <Grid item xs={9}>
            INFO
          </Grid>
        </Grid>
        <MyPosts/>
        </div>
    )
}