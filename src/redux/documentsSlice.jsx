// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { GetDocuments, UploadDocuments } from './thunks';

const initialState = {
    documents: [],
    loading: false,
};

const DocsSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(GetDocuments.pending, (state) => {
                state.loading = true;

            })
            .addCase(GetDocuments.fulfilled, (state, action) => {
                state.loading = false;
                state.documents = action.payload.documents;
            })
            .addCase(GetDocuments.rejected, (state, action) => {
                state.loading = false;
            })
            .addCase(UploadDocuments.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(UploadDocuments.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(UploadDocuments.rejected, (state, action) => {
                state.loading = false;
            });
    },
});



export default DocsSlice.reducer; 
