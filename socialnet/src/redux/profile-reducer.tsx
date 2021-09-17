import { Dispatch } from "redux"
import { usersAPI } from "../api/api"

type PostType = {
    id:number,
    message:string,
    title: string,
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>,
    newPostText:string,
    profile: any,
}

export type ProfileActionType = ReturnType<typeof addPost> | ReturnType<typeof updateNewText> 
                       | ReturnType<typeof setUserProfile> 

let initialState: ProfilePageType = {
    newPostText: "Enter your text",
    profile: null,
    posts: [
        { id: 1, message: "DADADADa", title: "Post #1", likesCount: 12 },
        { id: 2, message: "DADADADa", title: "Post #1", likesCount: 4 },
        { id: 3, message: "DADADADa", title: "Post #1", likesCount: 50 },
        { id: 4, message: "DADADADa", title: "Post #1", likesCount: 44 },
        { id: 5, message: "DADADADa", title: "Post #1", likesCount: 12 },
        { id: 6, message: "DADADADa", title: "Post #1", likesCount: 20 },
    ]
}

export const addPost = () => ({type: 'ADD_POST'}) as const
export const updateNewText = (newText: string) => ({type: 'UPDATE_NEW_POST_TEXT',newText: newText}) as const
export const setUserProfile = (profile: any) => ({type: 'SET_USER_PROFILE', profile: profile}) as const

export const getUserProfileThunk = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response))
        })
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType): ProfilePageType => {

    switch (action.type) {
        case 'ADD_POST': 
            let newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0,
                title: ""
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
        case 'UPDATE_NEW_POST_TEXT': 
            return {
                ...state,
                newPostText: action.newText
            }
        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}