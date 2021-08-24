import React from 'react';
import {useStyles} from '../../../AppCss';
import { ActionTypes} from '../../../redux/store';
import { addPostActionCreator, updateNewTextActionCreator } from '../../../redux/profile-reducer';
import { MyPosts } from './MyPosts';
import { StoreContext } from '../../../StoreContext';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';
import { Dispatch } from 'redux';

export type PostType = {
    id:number,
    message:string,
    title:string
}

type MyPostType = {
    posts?: Array<PostType>,
    newPostText?:string,
    dispatch?:(action: ActionTypes)=> void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)