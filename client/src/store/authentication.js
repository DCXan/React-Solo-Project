import { createSlice } from "@reduxjs/toolkit";

export const isAuthSlice = createSlice({
    name: "authStatus",
    initialState: {
        isAuth: false,
        user: null
    },
    reducers: {
        logIn: (state, action) => {
            state.isAuth = true
            state.user = action.payload
        },
        logOut: (state) => {
            state.isAuth = false
            state.user = null
        }
    }
})

export const { logIn, logOut } = isAuthSlice.actions
export default isAuthSlice.reducer