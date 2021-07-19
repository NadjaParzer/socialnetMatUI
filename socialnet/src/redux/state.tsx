import { renderTree } from "../render"


type MessageType = {
    id: number,
    message: string
}
type DialogType = {
    id: number,
    name: string
}
type PostType = {
    id:number,
    message:string,
    title: string,
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostType>,
    newPostText:string
}
type DialogsPageType = {
    messages: Array<MessageType>,
    dialogs: Array<DialogType>
}
export type RootStateType = {
    profilePage:ProfilePageType,
    dialogsPage:DialogsPageType,
}



let state: RootStateType = {
    
    profilePage: {
        newPostText: "Enter your text",
        posts: [
        {id:1, message:"DADADADa", title:"Post #1", likesCount: 12},
        {id:2, message:"DADADADa", title:"Post #1", likesCount: 4},
        {id:3, message:"DADADADa", title:"Post #1", likesCount: 50},
        {id:4, message:"DADADADa", title:"Post #1", likesCount: 44},
        {id:5, message:"DADADADa", title:"Post #1", likesCount: 12},
        {id:6, message:"DADADADa", title:"Post #1", likesCount: 20},
      ], 
     
    },
    dialogsPage: {
        messages: [
        {id:1, message: "Hello"},
        {id:2, message:"Yo"},
        {id:3, message:"Hi,hi"},
        {id:4, message:"Super"},
        {id:5, message:"I,m happy"},
        {id:6, message:"Who are you"},
        {id:7, message:"???"},
        ],
         dialogs: [
        {id:1, name:"Anna"},
        {id:2, name:"Anton"},
        {id:3, name:"Maria"},
        {id:4, name:"Tomas"},
        {id:5, name:"Viktor"},
        {id:6, name:"Vera"},
        {id:7, name:"Igor"},
        ],
    }     
}

export const addPost = () => {
    let newPost:PostType = {
        id: new Date().getTime(),
        message: state.profilePage.newPostText,
        likesCount: 0,
        title: ""
    }
    state.profilePage.posts.unshift(newPost)
    state.profilePage.newPostText = ""
    renderTree(state)
}

export const updateNewPostText = (newText:string) => {
    state.profilePage.newPostText = newText
    
    renderTree(state)
}

export default state;
