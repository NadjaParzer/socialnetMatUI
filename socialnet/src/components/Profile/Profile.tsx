import React from 'react';
import { Avatar, Button, Container, Grid, Typography } from "@material-ui/core";
import {useStyles} from '../../AppCss';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo';

export function Profile () {
    const s = useStyles()
    return (
        <div>
        <ProfileInfo/>
        <MyPosts/>
        </div>
    )
}