import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: "movieSlice",

    initialState: {
        movies: null,
        error: null,
        loading: true,
    },

    reducers: {
        movieLoading: (state, action) => {
            state.error = false;
            state.loading = action.payload;
        },

        movieError: (state) => {
            state.error = true;
            state.loading = false;
        },

        movieData: (state, action) => {
            state.error = false;
            state.loading = false;
            state.movies = action.payload;
        }
    }
})

export default MovieSlice;