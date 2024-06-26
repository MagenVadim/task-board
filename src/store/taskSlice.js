import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasks = createAsyncThunk('taskList/fetchTasks',
     async ()=>{
        console.log("ttttt")
        try{
            const response = await fetch('http://localhost:4444/tasks'); 
            // const response = await axios.get('http://localhost:4444/tasks');   
            const data = await response.json();
            return data;
        } catch(err) {
            return err.message;
        }
    }
)

const initialState = {
    tasks: [],
    status: null,
    error: null,
}

const taskSlice = createSlice({
    name: "taskList",    
    initialState,   
    reducers:{
        // dataLoading(state, action){
        //     if (state.length===0){
        //         state.push(...action.payload);
        //     } 
        // },
        // removeTask(state, action){
        //     return state.filter(el => el.id !== action.payload.id);            
        // },
        // addTask(state, action){
        //     state.push(action.payload);
        // },
        // editTask(state, action){
        //     const indexTask = state.indexOf(state.find(el => el.id===action.payload.id))    
        //     state.splice(indexTask, 1, action.payload.taskObject)              
        // }
    },

    extraReducers:
        (builder) => {
            builder
                .addCase(fetchTasks.pending,(state)=>{
                    state.status = 'loading';
                    state.error = null;
                })
                .addCase(fetchTasks.fulfilled,(state, action)=>{
                    state.status = 'resolved';
                    if (state.tasks.length===0){
                        state.tasks.push(...action.payload);
                    } 
                })
                .addCase(fetchTasks.rejected,(state, action)=>{
                    console.log("rejected")
                })
        }
});

export const {dataLoading, removeTask, addTask, editTask} = taskSlice.actions;
export default taskSlice.reducer;
export const allTasks = (state)=>state.tasks;