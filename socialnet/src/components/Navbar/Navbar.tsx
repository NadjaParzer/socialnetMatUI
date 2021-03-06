import React from "react";
import List from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Drawer } from "@material-ui/core";
import {useStyles} from '../../AppCss';

export function Navbar() {
    const s = useStyles()
    return (
        <>
            <List className={s.navbar}>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            
    </>
    )
}
