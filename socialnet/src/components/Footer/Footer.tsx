import React from "react";
import {  Typography, BottomNavigation, BottomNavigationAction, Container, } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {useStyles} from '../../AppCss';

type FooterType = {
    value?:any,
    handleChange?: () => void
}

export function Footer (props:FooterType) {
    const s = useStyles()
     
    return (<div className={s.footer} style={{backgroundColor:"greenyellow"}}>

    
        <footer>
           
            <BottomNavigation value={props.value} onChange={props.handleChange}
            className={s.root} >
                <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon/>} />
                <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon/>} />
                <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon/>} />
                <BottomNavigationAction label="NearBy" value="nearby" icon={<LocationOnIcon/>} />
            </BottomNavigation>
        </footer>
        </div>
    )
}