import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (addUser, thunkAPI) => {
        try {
            const response = await fetch(

                'http://localhost:8080/isUserLogin',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        //   Authorization: token,
                        'Content-Type': 'application/json',
                        // 'auth-token': token
                    },
                    body: JSON.stringify(addUser)
                }
            );
            let data = await response.json();
            console.log('data0', data, response.status);

            if (response.status === 200) {

                return { ...data };
            } else {
                return thunkAPI.rejectWithValue(data);

            }
        } catch (e) {
            console.log('Error', e.response.data);
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);


const initialState = {
    // token: JSON.parse(localStorage.getItem('token') ?? ""),
    isAuthenticated: null,
    loading: false,
    user: null,
    error: null,

}

export const LoginSlice = createSlice({
    name: 'user',
    initialState,

    extraReducers: builder => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload; // <-- no errors, response is token
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // <-- error response
            })

    }
})

export const { } = LoginSlice.actions;

export default LoginSlice.reducer