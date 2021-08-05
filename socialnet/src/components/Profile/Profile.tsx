import React from 'react';
import {useStyles} from '../../AppCss';
import { ActionTypes } from '../../redux/store';
import { PostType, } from './MyPosts/MyPosts';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
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
        <MyPostsContainer posts = {props.posts} newPostText={props.newPostText} dispatch={props.dispatch} />
        <CustomizedDialogs/>
        </div>
    )
}