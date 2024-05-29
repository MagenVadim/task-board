import { createSlice} from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "taskList",
    initialState:[],
    reducers:{
        dataLoading(state, action){
            state.push(action.payload)
        },

        removeTask(state, action){
            return state.filter(el => el.id !== action.payload.id);          
        }
    },
});

export const {dataLoading, removeTask} = taskSlice.actions;
export default taskSlice.reducer;