import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./../feature/toto/todoSlice";

export const store = configureStore({
    reducer: todoReducer
})