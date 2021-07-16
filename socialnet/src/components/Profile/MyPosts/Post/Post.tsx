import React from "react";
import { CardActions, CardContent, Card, CardActionArea, CardMedia, Typography,
    Button, Box, Paper} from '@material-ui/core';
import {useStyles} from '../../../../AppCss';

type PostProps = {
    title: string,
    message: string
}

export const Post = (props:PostProps) => {
    const s = useStyles()
    return (
        <Card className={s.marginBottom} >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="new post"
            height="140"
            image="https://lorempixel.com/1000/300"
            title="Post Title"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {props.message}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Read more...
          </Button>
          <Button size="small" color="primary">
            Like
          </Button>
        </CardActions>
      </Card>
    )
}