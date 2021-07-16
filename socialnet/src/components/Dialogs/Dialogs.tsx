import React from "react";
import { Avatar, Button, Container, Grid, Typography,List,ListItem,ListItemAvatar,ListItemText } from "@material-ui/core";
import {useStyles} from '../../AppCss';
import PersonIcon from '@material-ui/icons/Person';
import { DialogItem } from "./DialogItem";

function generate(element: React.ReactElement) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

  type Friend = {
          id:number,
          name:string
      }
   type Message = {
    id:number,
    message:string
   }   
  
  let dialogsData:Array<Friend> = [
      {id:1, name:"Anna"},
      {id:2, name:"Anton"},
      {id:3, name:"Maria"},
      {id:4, name:"Tomas"},
      {id:5, name:"Viktor"},
      {id:6, name:"Vera"},
      {id:7, name:"Igor"},
  ]
  let messagesData:Array<Message> = [
    {id:1, message: "Hello"},
    {id:2, message:"Yo"},
    {id:3, message:"Hi,hi"},
    {id:4, message:"Super"},
    {id:5, message:"I,m happy"},
    {id:6, message:"Who are you"},
    {id:7, message:"???"},
]

export const Dialogs = () => {
    const s = useStyles()
    return (
        <div>
            <Typography variant="h6" >Friends</Typography>
            <List >
                   {generate(
                    <DialogItem name={dialogsData[6].name} id={1} lastMessage={messagesData[6].message}/>
                )} 
            </List>
        </div >
    )
}