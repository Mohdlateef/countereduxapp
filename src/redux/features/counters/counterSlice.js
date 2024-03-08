import { createSlice } from "@reduxjs/toolkit";

let intialState=0;
const counterSlice=createSlice({
name:'counter',
initialState:intialState,
reducers:{
    increase:state=>state+1,
    decrease:state=>state-1,
    reset:state=>intialState,
}

})

export const{increase,decrease,reset}=counterSlice.actions;
export const counterReducer=counterSlice.reducer;