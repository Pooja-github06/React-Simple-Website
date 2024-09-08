import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../Features/Register/RegisterSlice"
import authReducer from '../components/Testing/authSlice';
const store = configureStore({

    reducer: registerReducer
    // reducer: authReducer
});

export default store;

