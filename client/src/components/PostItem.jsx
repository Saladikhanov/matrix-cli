import React from 'react';
import {useDispatch} from "react-redux";
import {deletePost} from "../redux/actions/postActions";

const PostItem = ({post}) => {
    const {title, username, likes, dislikes, id, date} = post;
    const dispatch = useDispatch();
    const options = {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'};
    const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date);

    const handleDeletePost = () => {
        dispatch(deletePost(id));

    }

    const handleLikePost = () => {
        // Dispatch action to increment like count
    };

    const handleDislikePost = () => {
    };

    return (
        <div className="post-item">
            <div className="d-flex flex-row align-items-center justify-content-sm-between">
                <h3>{title}</h3>
                <button className="matrix-button" onClick={handleDeletePost}>[X]</button>
            </div>
            <p>Author: {username}</p>

            <p>Likes: {likes}</p>
            <p>Dislikes: {dislikes}</p>
            <p>Date: {formattedDate}</p>
            <div className="d-flex flex-row align-items-center justify-content-sm-between">
                <button className="matrix-button" onClick={handleLikePost}>Like</button>
                <button className="matrix-button" onClick={handleDislikePost}>Dislike</button>
            </div>
            <p>{post.content}</p> {/* Display post content */}
            {/*{post.imageUrl && <img src={post.imageUrl} alt="Post" />} /!* Display post image if available *!/*/}
        </div>
    );
};

export default PostItem;
