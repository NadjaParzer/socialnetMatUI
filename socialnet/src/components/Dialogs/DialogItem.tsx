import React from "react";
import {Avatar,ListItem,ListItemAvatar,ListItemText } from "@material-ui/core";
import {useStyles} from '../../AppCss';
import { NavLink } from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';

export type DialogType = {
    name: string,
    id: number,
    message?: string
}

export const DialogItem = (props: DialogType) => {
    const s = useStyles()
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar><PersonIcon /></Avatar>
            </ListItemAvatar>
            <ListItemText ><NavLink className={s.navLinkDialogs} to={"/dialods/" + props.id}>{props.name}
            <span className={s.lastMessage}>{props.message}</span></NavLink></ListItemText>
        </ListItem>
    )
}