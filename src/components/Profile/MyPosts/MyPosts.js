import React from 'react'

import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements =
        props.postData.map((post) => <Post message={post.message} likesCount={post.likeCount}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
    }

    let newPostUpdate = () => {
        let text = newPostElement.current.value
        props.updateNewText(text)
    }

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={newPostUpdate} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                    <button>Remove post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postElements }
            </div>
        </div>
    )
}

export default MyPosts;