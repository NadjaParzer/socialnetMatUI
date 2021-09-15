
import { addPost, ProfileActionType, updateNewText } from '../../../redux/profile-reducer';
import { MyPosts } from './MyPosts';
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
    dispatch?:(action: ProfileActionType )=> void
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
            dispatch(updateNewText(text))
        },
        addPost: () => {
            dispatch(addPost())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)