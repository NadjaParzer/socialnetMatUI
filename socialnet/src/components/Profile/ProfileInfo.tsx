import React from 'react';
import { Avatar, Button, CircularProgress, Container, Grid, Typography } from "@material-ui/core";
import {useStyles} from '../../AppCss';

type ProfileInfoPropsType = {
    profile: any
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    const s = useStyles()
    if (!props.profile) {
        return <div style={{textAlign: 'center'}}><CircularProgress size="60px" color="secondary" /> </div>
    }
    return (
        <Grid container spacing={5} justify="center" >
            <Grid item xs={3} className={s.marginBottom} >
                <Avatar src={props.profile.photos.large} className={s.avatarLarge} variant="rounded">NZ</Avatar>
            </Grid>
            <Grid item xs={9}>
               <Typography>Name: Name Lsatname</Typography>
               <Typography>Location: London</Typography>
               <Typography>Occupation: Student</Typography>
            </Grid >
        </Grid >
    )
}