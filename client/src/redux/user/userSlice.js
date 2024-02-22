import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    error: null,
    loading: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signinStart: (state)=> {
            state.loading = true;
        },
        signinSuccess: (state, action)=> {
            state.user = action.payload;
            state.error = null;
            state.loading = false;
        },
        signinFail: (state, action)=> {
            state.error = action.payload;
            state.loading = false;
        }
    }
})

export const {signinStart, signinSuccess, signinFail} = userSlice.actions;
export default userSlice.reducer;