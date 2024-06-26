import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    'userList/fetchUsers',
    async function(){
        const response = await fetch('http://localhost:4444/consumers');
        const data = await response.json();
        return data;
    }
)

const userSlice = createSlice({
    name:"userList",
    initialState:[],
    reducers:{
        userLoading(state, action){
            if (state.length===0){
                state.push(...action.payload);
            } 
        },
    }
});

export const {userLoading} = userSlice.actions;
export default userSlice.reducer;