import React from 'react';
import { Avatar, Button, Container, Grid, Typography } from "@material-ui/core";
import {useStyles} from '../../AppCss';

export function ProfileInfo() {
    const s = useStyles()
    return (
        <Grid container spacing={5} justify="center" >
            <Grid item xs={3} className={s.marginBottom} >
                <Avatar src="https://picsum.photos/200" className={s.avatarLarge} variant="rounded">NZ</Avatar>
            </Grid>
            <Grid item xs={9}>
               <Typography>Name: Name Lsatname</Typography>
               <Typography>Location: London</Typography>
               <Typography>Occupation: Student</Typography>
            </Grid >
        </Grid >
    )
}