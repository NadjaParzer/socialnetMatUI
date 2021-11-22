import React from 'react';
import {Typography } from "@material-ui/core";


type ProfileStatusType = {
  status: string
}

export const ProfileStatus = (props: ProfileStatusType) => {
  return <Typography>{props.status}</Typography>
}