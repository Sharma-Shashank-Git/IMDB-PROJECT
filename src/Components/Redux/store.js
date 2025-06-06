import { configureStore } from "@reduxjs/toolkit";
import PaginationSlice from "./PaginationSlice";
import MovieSlice from "./MovieSlice";

const store = configureStore({
    reducer : {
        PaginationSlice : PaginationSlice.reducer,
        MovieSlice : MovieSlice.reducer
    }
})

export default store;