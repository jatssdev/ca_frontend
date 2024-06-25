// src/features/auth/authThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Alert } from '../App';


export const registerUser = createAsyncThunk(
    'auth/register',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post('/api/user/register', userData);
            // console.log(response.data)
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post('/api/user/login.php', credentials);
            // const token = response.data.token;
            // Dispatch verifyUser thunk with the token
            // dispatch(verifyUser(token))

            await Alert(response.data.success, response.data.message)
            return response.data

        } catch (error) {

            Alert(error.response.data.success, error.response.data.message)
            return rejectWithValue(error.response.data);
        }
    }
);

export const verifyUser = createAsyncThunk(
    'auth/verifyUser',
    async (token, { rejectWithValue }) => {
        try {
            const response = await axios.get('/api/user/auth', {
                headers: {
                    Authorization: `${token}`,
                },
            });
            await Alert(response.data.success, response.data.message)
            return response.data


        } catch (error) {
            Alert(error.response.data.success, error.response.data.message)
            return rejectWithValue(error.response.data);
        }
    }
)

export const logoutUser = createAsyncThunk(
    'auth/logoutUser',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post('/api/user/logout.php', {}, {
                withCredentials: true,
            });
            await Alert(response.data.success, response.data.message)
            return response.data
        } catch (error) {
            Alert(error.response.data.success, error.response.data.message)
            return rejectWithValue(error.response.data);
        }
    }
);



// documents  



export const GetDocuments = createAsyncThunk(
    'documents/get',
    async (type, { rejectWithValue, dispatch }) => {
        try {
            let Url = type ? `/api/user/get/documents.php?type=${type}` : '/api/user/get/documents.php'
            const response = await axios.get(Url, {
                withCredentials: true,
            });

            console.log(response.data)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const UploadDocuments = createAsyncThunk(
    'documents/upload',
    async (data, { rejectWithValue }) => {
        try {
            const Url = `/api/user/upload/document.php`;
            const response = await axios.post(Url, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true,
            });
            console.log('uploaded', response.data);
            await Alert(response.data.success, response.data.message)
            dispatch(GetDocuments(false))
            return response.data
        } catch (error) {
            Alert(error.response.data.success, error.response.data.message)
            return rejectWithValue(error.response.data);
        }
    }
);


// admin 


export const addClient = createAsyncThunk(
    'users/add/client',
    async (data, { rejectWithValue }) => {
        try {
            const Url = `/api/admin/add/client.php`;
            const response = await axios.post(Url, data, {

                withCredentials: true,
            });
            console.log('added cli', response.data);

            await Alert(response.data.success, response.data.message)
            return response.data
        } catch (error) {
            Alert(error.response.data.success, error.response.data.message)
            return rejectWithValue(error.response.data);
        }
    }
);
export const addEmployee = createAsyncThunk(
    'users/add/employee',
    async (data, { rejectWithValue }) => {
        try {
            const Url = `/api/admin/add/employee.php`;
            const response = await axios.post(Url, data, {

                withCredentials: true,
            });
            console.log('added emp', response.data);

            await Alert(response.data.success, response.data.message)
            return response.data
        } catch (error) {
            Alert(error.response.data.success, error.response.data.message)
            return rejectWithValue(error.response.data);
        }
    }
);
export const adminLogin = createAsyncThunk(
    'admin/login',
    async (data, { rejectWithValue }) => {
        try {
            const Url = `/api/admin/login.php`;
            const response = await axios.post(Url, data, {
                withCredentials: true,
            });
            console.log('admin loggedin', response.data);

            await Alert(response.data.success, response.data.message)
            return response.data
        } catch (error) {
            Alert(error.response.data.success, error.response.data.message)
            return rejectWithValue(error.response.data);
        }
    }
);
export const getAllUsers = createAsyncThunk(
    'admin/get/users',
    async (type, { rejectWithValue }) => {
        try {
            const Url = type ? `/api/admin/get/users.php?type=${type}` : `/api/admin/get/users.php`;
            const response = await axios.get(Url, {
                withCredentials: true,
            });
            console.log('admin users', response.data);

            return response.data; // Assuming you want to return the response data
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
export const getAllDocuments = createAsyncThunk(
    'admin/get/documents',
    async (type, { rejectWithValue }) => {
        try {
            const Url = type ? `/api/admin/get/documents.php?type=${type}` : `/api/admin/get/documents.php`;
            const response = await axios.get(Url, {
                withCredentials: true,
            });
            console.log('admin documents', response.data);

            return response.data; // Assuming you want to return the response data
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);