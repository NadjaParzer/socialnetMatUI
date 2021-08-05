import React from 'react';
import { TextareaAutosize, Button, Grid, Typography } from '@material-ui/core';
import {useStyles} from '../../../AppCss';
import { Post } from './Post/Post';
import { ChangeEvent } from 'react';

export type PostType = {
    id:number,
    message:string,
    title:string
}

type MyPostType = {
    posts: Array<PostType>,
    newPostText:string,
    updateNewPostText: (text: string) => void
    addPost: () => void
}

export function MyPosts(props:MyPostType) {
    const s = useStyles()

    let postsElements = props.posts.map(p => <Post key={p.id} title={p.title} message={p.message}/>)

    const addPost = () => {
       props.addPost()
    }

    const onChangeText = (event:ChangeEvent<HTMLTextAreaElement>)=> {
        let text = event.currentTarget.value
        props.updateNewPostText(text)
    }

    return (
        <Grid container>
            <Grid item xs={10}>
            <Typography variant="h4" gutterBottom>My Posts</Typography>
            <div className={s.marginBottom}>
                <div>
                  <input id="file-input" type="file" name="file" multiple/>  
                </div>
                    <TextareaAutosize onChange={onChangeText} value={props.newPostText} className={s.newPost} rows={8} aria-label="maximum height" placeholder="..." />  
                <div >
                    <Button onClick = {addPost} className={s.btnPost} variant="outlined" color="primary">Add Post</Button>
                </div>
            </div>
            <div >
            {postsElements}
            </div>
            </Grid>
        </Grid>
    )
}