// src/utils/appStore.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import moviesReducer from "../features/movies/moviesSlice";

const appStore = configureStore({
  reducer: {
    auth: authReducer,
    movies: moviesReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default appStore;