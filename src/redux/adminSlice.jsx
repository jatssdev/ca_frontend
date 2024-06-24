// src/features/auth/adminSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { adminLogin, logoutUser } from './thunks';
// import { registerUser, loginUser, logoutUser, verifyUser } from '../thunk/authThunks';

const initialState = {
    admin: null,
    loading: false,
    isAuth: false,
    users: [],
    message: null
};

const adminSlice = createSlice({
    name: 'admin/auth',
    initialState,
    reducers: {
        logoutAdmin(state) {
            state.admin = null;
            state.isAuth = false;
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
            .addCase(adminLogin.pending, (state) => {
                state.loading = true;
                state.message = null;
            })
            .addCase(adminLogin.fulfilled, (state, action) => {
                console.log('slice ', action.payload)
                state.loading = false;
                state.message = action.payload.message;
                state.admin = action.payload.user
                state.isAuth = true
            })
            .addCase(adminLogin.rejected, (state, action) => {
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


export const { logoutAdmin } = adminSlice.actions;
export default adminSlice.reducer;
