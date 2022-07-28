import { createSlice } from '@reduxjs/toolkit';

export const paginationSlice = createSlice({
	name: 'pagination',
    initialState: 20,
    reducers: {
        updateLimitPagination: (state, action) => {
            return action.payload;
        }
    }
})

export const { updateLimitPagination } = paginationSlice.actions;

export default paginationSlice.reducer;