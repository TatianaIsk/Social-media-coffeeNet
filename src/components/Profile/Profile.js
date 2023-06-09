import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost} postData={props.state.post} updateNewText={props.updateNewPost} newTextUpdate={props.state.newPostText}/>
        </div>
    )
}

export default Profile;