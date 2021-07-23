import React from 'react';
import {useStyles} from '../../AppCss';
import { MyPosts, PostType, } from './MyPosts/MyPosts';
import CustomizedDialogs from './MyPosts/Post/MyPostMatUI';
import { ProfileInfo } from './ProfileInfo';

type ProfileType = {
    posts: Array<PostType>,
    addPost: ()=> void,
    newPostText:string,
    updateNewPostText: (text:string)=>void
}


export function Profile (props:ProfileType) {

  
    const s = useStyles()
    return (
        <div>
        <ProfileInfo/>
        <MyPosts posts = {props.posts} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText} addPost={props.addPost} />
        <CustomizedDialogs/>
        </div>
    )
}