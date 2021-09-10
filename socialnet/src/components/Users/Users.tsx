import { Avatar, Button, Card, Grid, Typography } from '@material-ui/core'
import { UsersPagePropsType } from './UsersContainer'


export let Users = (props: UsersPagePropsType) => {
    console.log(props.users)
    return (
        <>
        {props.users.map(u => <Card style={{marginTop: '10px'}} key={u.id}>
            
            <Grid container 
                  style={{padding: '10px'}}
                  justifyContent='space-between'>
                <Grid item>
                    <Avatar />
                    <Typography>
                {u.fullName}
            </Typography>
            <Typography>
                {`Location: ${u.location.country}, ${u.location.city}`}
            </Typography>
            <Typography>
                {`Status: ${u.status}`}
            </Typography>
                </Grid>
                <Grid item>
                {u.followed
                        ? <Button onClick={() => { props.unFollow(u.id) }}>Unfollow</Button>
                        : <Button onClick={() => { props.follow(u.id) }}>Follow</Button>}
                <Button>Send message</Button>
                </Grid>
            </Grid>
            
        </Card>)}


        </>
    //     {
    //         props.users.map( u => <Card key={u.id}>
    //                 <Typography color="textSecondary" gutterBottom>
    //                     {u.fullName}
    //                 </Typography>
    //                 <Typography variant="h5" component="h2">
    //                     {u.location}
    //                 </Typography>
    //                 <Typography color="textSecondary">
    //                     {u.status}
    //                 </Typography>
    //                 <Typography>
    //                     
    //                 </Typography>
    //             </Card>
    //         )
    //     }
    // </>
    ) 
}