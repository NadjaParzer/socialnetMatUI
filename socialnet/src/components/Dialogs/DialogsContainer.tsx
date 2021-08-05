import React from "react";
import { Grid, Typography,List, } from "@material-ui/core";
import {useStyles} from '../../AppCss';
import { DialogItem } from "./DialogItem";
import { MessageItem, MessageType } from "./Message";
import { DialogType } from "./DialogItem";
import { ChangeEvent } from 'react';
import { ActionTypes} from "../../redux/store";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import { Dialogs } from "./Dialogs";

function generate(element: React.ReactElement) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

type DialogsType = {
    dialogs: Array<DialogType>,
    newMessageText: string,
    messages: Array<MessageType>,
    dispatch:(action: ActionTypes)=> void
}

export const DialogsContainer = (props:DialogsType) => {
    let onSendMessageClkick = () => props.dispatch(sendMessageActionCreator())
    let onNewMessageChange = (text:string) => {
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    const s = useStyles()
    return (
     <Dialogs onNewMessageChange={onNewMessageChange} onSendMessageClkick={onSendMessageClkick}
      dialogs={props.dialogs} newMessageText={props.newMessageText} messages={props.messages}  />
    )
}