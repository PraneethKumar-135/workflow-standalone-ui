import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const useCaseSlice = createSlice({
    name: "useCaseSlice",
    initialState,
    reducers: {
        addUsecaseId(state, action) {
            state.initialState = action.payload
        }
    }
})

export default useCaseSlice.reducer
export const { addUsecaseId } = useCaseSlice.actions