import React from 'react';
import { Avatar, Button, CircularProgress, Container, Grid, Typography } from "@material-ui/core";
import {useStyles} from '../../AppCss';
import getInitials from '../../utils/getInitials';
import { ProfileStatus } from './ProfileStatus';

type ProfileInfoPropsType = {
    profile: any
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    const s = useStyles()
    if (!props.profile) {
        return <div style={{textAlign: 'center'}}><CircularProgress size="60px" color="secondary" /> </div>
    }
    console.log(props.profile)
    return (
        <Grid container spacing={5} justify="center" >
            <Grid item xs={3} className={s.marginBottom} >
                <Avatar src={props.profile.photos.large} className={s.avatarLarge} variant="rounded">{getInitials(props.profile.fullName)}</Avatar>
                <ProfileStatus status={'hello my friends!!'} />
            </Grid>
            <Grid item xs={9}>
               <Typography>{`Name: ${props.profile.fullName}`}</Typography>
               <Typography>Location: London</Typography>
               <Typography>{`Looking for job: ${props.profile.lookingForAJob}`}</Typography>
              
            </Grid >
        </Grid >
    )
}