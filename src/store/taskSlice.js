import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    'userList/fetchUsers',
    async function(){
        const response = await fetch('http://localhost:4444/consumers');
        const data = await response.json();
        return data;
    }
)

export const fetchTasks = createAsyncThunk(
    'taskList/fetchTasks',
    async function(){
        const response = await fetch('http://localhost:4444/tasks');
        const data = await response.json();
        return data;
    }
)

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
    extraReducers:{
        [fetchTasks.pending]:(state, action)=>{},
        [fetchTasks.fulfilled]:(state, action)=>{},
        [fetchTasks.rejected]:(state, action)=>{},

    }
});



export const {dataLoading, removeTask, addTask, editTask} = taskSlice.actions;
export default taskSlice.reducer;