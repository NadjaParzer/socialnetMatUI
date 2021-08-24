import { ActionTypes} from "./store";

type MessageType = {
    id: number,
    message: string
}
export type DialogType = {
    id: number,
    name: string
}
export type DialogsPageType = {
    messages: Array<MessageType>,
    dialogs: Array<DialogType>,
    newMessageText: string
}

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

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionTypes): DialogsPageType => {
    let stateCopy
    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_TEXT':
            return {
                ...state,
                newMessageText: action.newMessageText
            }
        case 'SEND_MESSAGE':
            let text = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 8, message: text}]
            }
        default:
            return state
    }
}