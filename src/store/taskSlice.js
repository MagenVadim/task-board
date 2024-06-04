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
        },
        editTaskType(state, action){
            state.find(el => el.id===action.payload.id).type=action.payload.type
            
        }
    },
});



export const {dataLoading, removeTask, addTask, editTaskType} = taskSlice.actions;
export default taskSlice.reducer;