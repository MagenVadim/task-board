import { createSlice, current } from "@reduxjs/toolkit";


const taskSlice = createSlice({
    name: "taskList",
    initialState:[],
    reducers:{
        dataLoading(state, action){
            state.push(action.payload)
        },

        removeTask(state, action){
            // state.initialState = state.initialState.filter(el => el.id != action.payload.id)
            console.log(current(state))
        }
    },
});

export const {dataLoading, removeTask} = taskSlice.actions;
export default taskSlice.reducer;