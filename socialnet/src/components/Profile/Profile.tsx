import React from 'react';
import {useStyles} from '../../AppCss';
import { ActionTypes } from '../../redux/state';
import { MyPosts, PostType, } from './MyPosts/MyPosts';
import CustomizedDialogs from './MyPosts/Post/MyPostMatUI';
import { ProfileInfo } from './ProfileInfo';

type ProfileType = {
    posts: Array<PostType>,
    newPostText:string,
    dispatch: (action: ActionTypes ) => void
}


export function Profile (props:ProfileType) {

  
    const s = useStyles()
    return (
        <div>
        <ProfileInfo/>
        <MyPosts posts = {props.posts} newPostText={props.newPostText} dispatch={props.dispatch} />
        <CustomizedDialogs/>
        </div>
    )
}