import React from "react";
import { Grid, Typography,List, } from "@material-ui/core";
import {useStyles} from '../../AppCss';
import { DialogItem } from "./DialogItem";
import { MessageItem} from "./Message";
import { ChangeEvent } from 'react';
import { DialogsPagePropsType } from "./DialogsContainer";
import { Redirect } from "react-router";


function generate(element: React.ReactElement) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

export const Dialogs = (props:DialogsPagePropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />)
    let messagesElements = props.dialogsPage.messages.map(m => <MessageItem key={m.id} id={m.id} message={m.message} />)
    let newMessageText = props.dialogsPage.newMessageText
    let onSendMessageClick = () => props.onSendMessageClick()
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
                <button onClick={onSendMessageClick}>Send</button></div>
            </Grid>
        </Grid>
</div>
    )
}