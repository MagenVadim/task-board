import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './taskSlice'

export default configureStore({
    reducer:{
        taskReducer: taskReducer,
    },
})