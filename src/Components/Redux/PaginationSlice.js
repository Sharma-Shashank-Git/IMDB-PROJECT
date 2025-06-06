import { createSlice } from "@reduxjs/toolkit";

const PaginationSlice = createSlice({
    name: "paginationSlice",

    initialState: {
        PageNo: 1,
    },

    reducers: {
        handleNext: (state) => {
            state.PageNo = state.PageNo + 1;
        },

        handlePrevious: (state) => {
            state.PageNo = state.PageNo > 1 ? state.PageNo - 1 : state.PageNo;
        },
    }
})

export default PaginationSlice;