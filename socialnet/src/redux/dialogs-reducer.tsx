import { ActionTypes, DialogsPageType } from "./store";

let initialState: DialogsPageType = {
    messages: [
        { id: 1, message: "Hello" },
        { id: 2, message: "Yo" },
        { id: 3, message: "Hi,hi" },
        { id: 4, message: "Super" },
        { id: 5, message: "I,m happy" },
        { id: 6, message: "Who are you" },
        { id: 7, message: "???" },
    ],
    newMessageText: "",
    dialogs: [
        { id: 1, name: "Anna" },
        { id: 2, name: "Anton" },
        { id: 3, name: "Maria" },
        { id: 4, name: "Tomas" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Vera" },
        { id: 7, name: "Igor" },
    ],
}

export const updateNewMessageTextActionCreator = (newMessageText: string) => ({type: 'UPDATE_NEW_MESSAGE_TEXT', newMessageText: newMessageText }) as const
export const sendMessageActionCreator = () => ({type: 'SEND_MESSAGE'}) as const

export const dialogsReducer = (dialogsPage: DialogsPageType = initialState, action: ActionTypes) => {

    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_TEXT':
            dialogsPage.newMessageText = action.newMessageText
            return dialogsPage
        case 'SEND_MESSAGE':
            let text = dialogsPage.newMessageText
            dialogsPage.newMessageText = ''
            dialogsPage.messages.push({ id: 8, message: text })
            return dialogsPage
        default:
            return dialogsPage
    }
}