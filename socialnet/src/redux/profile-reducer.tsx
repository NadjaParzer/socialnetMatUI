import { PostType } from "./store";
import { ActionTypes, ProfilePageType } from "./store";

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

export const profileReducer = (profilePage: ProfilePageType = initialState, action: ActionTypes) => {

    switch (action.type) {
        case 'ADD_POST':
            let newPost: PostType = {
                id: new Date().getTime(),
                message: profilePage.newPostText,
                likesCount: 0,
                title: ""
            }
            profilePage.posts.unshift(newPost)
            profilePage.newPostText = ""
            return profilePage
        case 'UPDATE_NEW_POST_TEXT':
            profilePage.newPostText = action.newText
            return profilePage
        default:
            return profilePage
    }
}