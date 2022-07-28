import { configureStore } from '@reduxjs/toolkit'
import trainerSlice from './slices/trainer.slice'
import pokemonsSlice from './slices/pokemons.slice'
import paginationSlice from './slices/pagination.slice'

export default configureStore({
  reducer: {
    trainer: trainerSlice,
    pokemons: pokemonsSlice,
    pagination: paginationSlice,
	}
})