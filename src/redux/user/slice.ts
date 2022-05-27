import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface UserState {
    loading: boolean;
    error: string | null;
    token: string | null;
}


const initialState: UserState = {
    loading: false,
    error: null,
    token: null
};

export const signIn = createAsyncThunk(
    "user/signIn",
    async (paramaters:{
        user:string,
        password:string
    }) => {
        const data = await axios.post(`https://www.fastmock.site/mock/ef752190847359716b80418509711210/api/loginJWT`,{
            user:paramaters.user,
            password:paramaters.password
        });
        console.log(data);
        return data.data;
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // fetchStart: (state) => {
        //     // return { ...state, loading: true };
        //     state.loading = true;
        // },
        // fetchSuccess: (state, action) => {
        //     state.data = action.payload;
        //     state.loading = false;
        //     state.error = null;
        // },
        // fetchFail: (state, action: PayloadAction<string | null>) => {
        //     state.loading = false;
        //     state.error = action.payload;
        // },
    },
    extraReducers: {
        [signIn.pending.type]: (state) => {
            // return { ...state, loading: true };
            state.loading = true;
        },
        [signIn.fulfilled.type]: (state, action) => {
            state.token = action.payload;
            state.loading = false;
            state.error = null;
        },
        [signIn.rejected.type]: (state, action: PayloadAction<string | null>) => {
            //   const ddd = action.payload;
            state.loading = false;
            state.error = action.payload;
        },
    }
})