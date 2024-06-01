import { createSlice} from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "taskList",
    initialState:[],
    reducers:{
        dataLoading(state, action){
            if (state.length===0){
                state.push(...action.payload);
            } 
        },
        removeTask(state, action){
            return state.filter(el => el.id !== action.payload.id);            
        },
        addTask(state, action){
            state.push(action.payload);
        }
    },
});

export const {dataLoading, removeTask, addTask} = taskSlice.actions;
export default taskSlice.reducer;