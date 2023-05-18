import s from './Post.module.css'
import users from './../../../../img/users.png'

const Post = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.post}>
                <img src={users} alt='user1'/>
                <p className={s.message}>{props.message}</p>
            </div>
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;