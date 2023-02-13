import { configureStore } from "@reduxjs/toolkit";
import answerSlice from "./answerSlice";
import userReducer from './useSlice'

export default configureStore({
    reducer:{
        user: userReducer,
        answer: answerSlice,
    },
});