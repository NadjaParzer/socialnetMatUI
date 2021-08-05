import React from "react";
import { Grid, Typography,List, } from "@material-ui/core";
import {useStyles} from '../../AppCss';
import { DialogItem } from "./DialogItem";
import { MessageItem, MessageType } from "./Message";
import { DialogType } from "./DialogItem";
import { ChangeEvent } from 'react';

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
    onNewMessageChange: (text:string) => void
    onSendMessageClkick: () => void
}

export const Dialogs = (props:DialogsType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />)
    let messagesElements = props.messages.map(m => <MessageItem key={m.id} id={m.id} message={m.message} />)
    let newMessageText = props.newMessageText
    let onSendMessageClkick = () => props.onSendMessageClkick
    let onNewMessageChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        props.onNewMessageChange(text)
    }

    const s = useStyles()
    return (
        <div>
            <Typography variant="h6" >Friends</Typography>
        <Grid container spacing={5} >   
            <Grid item xs={2}>
                <List >
                    {dialogsElements}
                </List>
            </Grid>
            <Grid item xs={10}>
                <div>{messagesElements}</div>
                <div><textarea onChange={onNewMessageChange} value={newMessageText} placeholder="Enter your message" />
                <button onClick={onSendMessageClkick}>Send</button></div>
            </Grid>
        </Grid>
</div>
    )
}