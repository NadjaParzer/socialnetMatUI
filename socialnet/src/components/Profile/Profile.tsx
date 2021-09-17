import {useStyles} from '../../AppCss';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import CustomizedDialogs from './MyPosts/Post/MyPostMatUI';
import { ProfileInfo } from './ProfileInfo';
import { ProfilePagePropsType } from './ProfileContainer';

export function Profile (props:ProfilePagePropsType) {

  
    const s = useStyles()
    return (
        <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer />
        <CustomizedDialogs/>
        </div>
    )
}

// <MyPostsContainer posts = {props.posts} newPostText={props.newPostText} dispatch={props.dispatch} />