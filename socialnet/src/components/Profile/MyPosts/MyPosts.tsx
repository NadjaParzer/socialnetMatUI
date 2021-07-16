import { TextareaAutosize, Button, Grid, Typography } from '@material-ui/core';
import {useStyles} from '../../../AppCss';
import { Post } from './Post/Post';

export function MyPosts() {
    const s = useStyles()
    return (
        <Grid container>
            <Grid item xs={10}>
            <Typography variant="h4" gutterBottom>My Posts</Typography>
            <div className={s.marginBottom}>
                    <TextareaAutosize className={s.newPost} rows={8} aria-label="maximum height" placeholder="..." />  
                <div >
                    <Button className={s.btnPost} variant="outlined" color="primary">Add Post</Button>
                </div>
            </div>
            <div >
                <Post  title="Post 1" message= "My first Post"/>
                <Post  title="Post 2" message= "My 2nd Post"/>
            </div>
            </Grid>
        </Grid>
    )
}