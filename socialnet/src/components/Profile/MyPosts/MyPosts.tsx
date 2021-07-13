import { TextareaAutosize, Button, Grid, Typography } from '@material-ui/core';
import {useStyles} from '../../../AppCss';

export function MyPosts() {
    const s = useStyles()
    return (
        <div>
            <Typography variant="h4" gutterBottom>My Posts</Typography>

            <Grid container spacing={5} justify="center">
                <Grid item xs={8}>
                    <TextareaAutosize className={s.newPost} rows={8} aria-label="maximum height" placeholder="..." />
                </Grid>
                <Grid item xs={4}>
                    <Button variant="outlined" color="primary">Add Post</Button>
                </Grid>


            </Grid>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis vitae totam omnis, corrupti minima ut expedita dignissimos non incidunt voluptate sint. Quibusdam repudiandae, repellendus ut consequatur dolorum deserunt. Nisi.
        </div>
    )
}