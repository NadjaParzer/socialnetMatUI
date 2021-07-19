import React from "react";
import {ListItem,ListItemText } from "@material-ui/core";
import {useStyles} from '../../AppCss';
import { NavLink } from "react-router-dom";


export type MessageType = {
    id: number,
    message?: string
}


export const MessageItem = (props: MessageType) => {
    const s = useStyles()
    return (
        <ListItem>
            
            <ListItemText ><NavLink className={s.navLinkDialogs} to={"/dialods/" + props.id}>
            <span className={s.lastMessage}>{props.message}</span></NavLink></ListItemText>
        </ListItem>
    )
}