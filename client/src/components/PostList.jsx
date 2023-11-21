import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PostItem from './PostItem';
import {getPosts} from "../redux/actions/postActions";


const PostList = () => {
    const posts = useSelector(state => state.post.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [posts]);

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                {posts && posts.map(post => (
                    <div key={post.id} className="col">
                        <PostItem post={post} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostList;
