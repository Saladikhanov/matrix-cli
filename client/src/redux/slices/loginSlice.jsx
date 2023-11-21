import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loggedIn: false,
    username: '',
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.loggedIn = true;
            state.username = action.payload;
        },
        logoutUser: (state) => {
            state.loggedIn = false;
            state.username = '';
        },
    },
});

export const { loginUser, logoutUser } = loginSlice.actions;

export default loginSlice.reducer;
