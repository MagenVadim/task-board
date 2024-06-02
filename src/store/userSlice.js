import { createSlice } from "@reduxjs/toolkit";

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