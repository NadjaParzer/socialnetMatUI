import React from "react";
import {Avatar, Button, Container, Grid, Typography,List,ListItem,ListItemAvatar,ListItemText } from "@material-ui/core";
import {useStyles} from '../../AppCss';
import { NavLink } from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';

type DialogItemprops = {
    name: string,
    id: number,
    lastMessage: string
}


export const DialogItem = (props: DialogItemprops) => {
    const s = useStyles()
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar><PersonIcon /></Avatar>
            </ListItemAvatar>
            <ListItemText ><NavLink className={s.navLinkDialogs} to={"/dialods/" + props.id}>{props.name}
            <span className={s.lastMessage}>{props.lastMessage}</span></NavLink></ListItemText>
        </ListItem>
    )
}