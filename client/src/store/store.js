import { configureStore } from "@reduxjs/toolkit"
import isAuthReducer from "./authentication"

export default configureStore({
    reducer: {
        authStatus: isAuthReducer
    }
})