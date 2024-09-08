// src/features/auth/authSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('auth/login', async (credentials) => {
    const response = await axios.post('http://localhost:8080/RegisterUserwithToken', credentials);
    return response.data;
});

export const verifyToken = createAsyncThunk('auth/verifyToken', async (token) => {
    const response = await axios.post('http://localhost:8080/verify-token', { token });
    return response.data;
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        status: 'idle',
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(verifyToken.fulfilled, (state, action) => {
                state.user = action.payload.user;
            })
            .addCase(verifyToken.rejected, (state) => {
                state.user = null;
                state.token = null;
            });
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
