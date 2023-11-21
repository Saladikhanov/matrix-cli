import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addPost} from '../redux/actions/postActions';

const AddPostModal = ({isOpen, toggleModal}) => {
    const username = useSelector((state) => state.login.username);
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleAddPost = (e) => {
        e.preventDefault();
        dispatch(addPost({username, title}));
        setTitle('');
        toggleModal(); // Close the modal after adding the post
    };

    const onClose = () => {
        toggleModal();
        setTitle('');

    }

    return (
        <div className={`modal fade ${isOpen ? 'show d-block' : ''}`} tabIndex="-1" role="dialog">
            <div className="modal-dialog " role="document">
                <div className="modal-content">
                    <div className="modal-header border-bottom-0">
                        <h5 className="modal-title">Add New Post</h5>
                        <button className="matrix-button" type="button" onClick={onClose}>
                            [X]
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="postContent">Content:</label>
                                <textarea
                                    id="postContent"
                                    className="form-control"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    rows="4"
                                    placeholder="Write your post content here..."
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer border-top-0">
                        <button type="button" className="matrix-button" onClick={handleAddPost}>
                            [add_Post]
                        </button>
                        <button type="button" className="matrix-button" onClick={onClose}>
                            [close]
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPostModal;
