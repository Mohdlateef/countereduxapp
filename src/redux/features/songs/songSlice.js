import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../counters/counterSlice";
let intailState=null;

const songSlice=createSlice({
    name:"ClickedSong",
    initialState:intailState,
    reducers:{
        clickedSong:(state,action)=>action.payload,
      
    },extraReducers:(builder)=>{
        builder.addCase(reset,(state)=>intailState)
    }
})

export const{clickedSong}=songSlice.actions;
const songReducre=songSlice.reducer;
export default songReducre;