import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice';
import postReducer from "./slices/postSlice";


const store = configureStore({
    reducer: {
        login: loginReducer,
        post: postReducer
    },

});

export default store;
