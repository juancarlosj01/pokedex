import { createSlice } from '@reduxjs/toolkit';

export const trainerSlice = createSlice({
	name: 'trainer',
    initialState: "",
    reducers: {
        changeTrainer: (state, action) => {
            return action.payload;
        }
    }
})

export const { changeTrainer } = trainerSlice.actions;

export default trainerSlice.reducer;