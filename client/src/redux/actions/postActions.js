import {createAsyncThunk} from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk('post/getPosts', async () => {
    try {
        const response = await fetch('http://127.0.0.1:8080/post');
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
});

export const addPost = createAsyncThunk(
    '/post/addPost',
    async (data) => {
        const response = await fetch('http://127.0.0.1:8080/post', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: data.title,
                username: data.username
            })
        });
        const res = await response.json();
        console.log(res);
        return res;
    }
);

export const deletePost = createAsyncThunk(
    '/post/deletePost',
    async (id) => {
        const response = await fetch(`http://127.0.0.1:8080/post/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            }
        });
        const res = await response.json();
        console.log(res);
        return res;
    }
);