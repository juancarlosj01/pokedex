import { createSlice } from '@reduxjs/toolkit';

export const pokemonsSlice = createSlice({
	name: 'pokemons',
    initialState: [],
    reducers: {
        updatePokemons: (state, action) => {
            return action.payload;
        }
    }
})

export const { updatePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;