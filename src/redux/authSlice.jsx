// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser } from './thunks';
// import { registerUser, loginUser, logoutUser, verifyUser } from '../thunk/authThunks';

const initialState = {
    user: null,
    loading: false,

    isAuth: false,
    message: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // .addCase(registerUser.pending, (state) => {
            //     state.loading = true;
            //     state.message = null;
            // })
            // .addCase(registerUser.fulfilled, (state, action) => {
            //     state.loading = false;
            //     state.message = action.payload.message;

            // })
            // .addCase(registerUser.rejected, (state, action) => {
            //     state.loading = false;
            //     state.message = action.payload.message;
            // })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.message = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action.payload.message;
                state.user = action.payload.user
                state.isAuth = true
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.message = action.payload.message;
                state.isAuth = false

            })
            // .addCase(verifyUser.pending, (state) => {
            //     state.loading = true;
            //     state.message = null;
            // })
            // .addCase(verifyUser.fulfilled, (state, action) => {
            //     state.loading = false;
            //     state.user = action.payload.user;
            //     state.isAuth = true
            //     console.log('very', action.payload)
            // })
            // .addCase(verifyUser.rejected, (state, action) => {
            //     state.loading = false;
            //     state.isAuth = false
            //     state.message = action.payload.message;
            //     console.log('veryre', action.payload)
            // })
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
                state.message = null;
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = null;
                state.isAuth = false
                state.message = action.payload.message;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.isAuth = false
                state.message = action.payload.message;
            });
    },
});


export const { logout } = authSlice.actions;
export default authSlice.reducer;
