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
        editTask(state, action){
            const indexTask = state.indexOf(state.find(el => el.id===action.payload.id))    
            state.splice(indexTask, 1, action.payload.taskObject)              
        }
    },
});



export const {dataLoading, removeTask, addTask, editTask} = taskSlice.actions;
export default taskSlice.reducer;