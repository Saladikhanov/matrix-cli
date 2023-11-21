import React, {useState} from 'react';
import {logoutUser} from "../redux/slices/loginSlice";
import {useDispatch, useSelector} from "react-redux";
import PostList from "./PostList";
import AddPostModal from "./AddPostModal";

const MainPage = () => {
    const username = useSelector((state) => state.login.username);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logoutUser());
    };
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <>
            <div>
                <h2>User: {username}</h2>
                <button className="matrix-button" onClick={handleLogout}>[logout]</button>
            </div>
            <AddPostModal isOpen={isModalOpen} toggleModal={toggleModal}/>
            <button className="matrix-button" onClick={toggleModal}>[create_new_post]</button>
            <PostList/>
        </>
    );
};

export default MainPage;