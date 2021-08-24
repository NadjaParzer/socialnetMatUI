import { ActionTypes } from "./store";

type PostType = {
    id:number,
    message:string,
    title: string,
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>,
    newPostText:string
}

let initialState: ProfilePageType = {
    newPostText: "Enter your text",
    posts: [
        { id: 1, message: "DADADADa", title: "Post #1", likesCount: 12 },
        { id: 2, message: "DADADADa", title: "Post #1", likesCount: 4 },
        { id: 3, message: "DADADADa", title: "Post #1", likesCount: 50 },
        { id: 4, message: "DADADADa", title: "Post #1", likesCount: 44 },
        { id: 5, message: "DADADADa", title: "Post #1", likesCount: 12 },
        { id: 6, message: "DADADADa", title: "Post #1", likesCount: 20 },
    ]
}

export const addPostActionCreator = () => ({type: 'ADD_POST'}) as const
export const updateNewTextActionCreator = (newText: string) => ({type: 'UPDATE_NEW_POST_TEXT',newText: newText}) as const

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {

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
        default:
            return state
    }
}