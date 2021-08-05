import React from 'react';
import {useStyles} from '../../../AppCss';
import { Post } from './Post/Post';
import { ActionTypes} from '../../../redux/store';
import { addPostActionCreator, updateNewTextActionCreator } from '../../../redux/profile-reducer';
import { MyPosts } from './MyPosts';

export type PostType = {
    id:number,
    message:string,
    title:string
}

type MyPostType = {
    posts: Array<PostType>,
    newPostText:string,
    dispatch:(action: ActionTypes)=> void
}

export function MyPostsContainer(props:MyPostType) {
    const s = useStyles()

    const addPost = () => {
       props.dispatch(addPostActionCreator())
    }

    const onChangeText = (text:string)=> {
        props.dispatch(updateNewTextActionCreator(text))
    }

    return (
        <MyPosts updateNewPostText={onChangeText} addPost={addPost} posts={props.posts} newPostText={props.newPostText} />
    )
}