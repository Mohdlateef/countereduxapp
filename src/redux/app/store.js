import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../features/counters/counterSlice";
import songReducre from "../features/songs/songSlice";

const store=configureStore({
    reducer:{
        counter:counterReducer,
        song:songReducre,
    }
})

export default store;