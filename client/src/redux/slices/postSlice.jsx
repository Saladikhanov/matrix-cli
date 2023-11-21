import {createSlice} from '@reduxjs/toolkit';
import {getPosts} from "../actions/postActions";

const initialState = {
    isLoading: false,
    posts: [],
    totalPages: 0,
    toFilter: '',
    error: null
};

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(getPosts.pending, state => {
                state.isLoading = true
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload.result;
            })
            .addCase(getPosts.rejected, (state) => {
                state.isLoading = false;
                state.error = "rejected";
            })
    }

});

// export const {} = postSlice.actions;

export default postSlice.reducer;