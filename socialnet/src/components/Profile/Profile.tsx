import React from 'react';
import {useStyles} from '../../AppCss';
import { ActionTypes } from '../../redux/store';
import { PostType, } from './MyPosts/MyPosts';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import CustomizedDialogs from './MyPosts/Post/MyPostMatUI';
import { ProfileInfo } from './ProfileInfo';
import { Dispatch } from "redux";

type ProfileType = {
    posts?: Array<PostType>,
    newPostText?:string,
    dispatch?: Dispatch
}


export function Profile (props:ProfileType) {

  
    const s = useStyles()
    return (
        <div>
        <ProfileInfo/>
        <MyPostsContainer />
        <CustomizedDialogs/>
        </div>
    )
}

// <MyPostsContainer posts = {props.posts} newPostText={props.newPostText} dispatch={props.dispatch} />