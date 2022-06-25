import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import {
	getCharacters,
} from '../store/character/action';

interface CharacterState {
	characters: Array<any>,
	loadError: boolean,
	loading: boolean,
	resultsInfo: Record<string, number>
}

const initialState: CharacterState = {
	characters: [],
	loadError: false,
	loading: true,
	resultsInfo: {}
}

const characterSlice = createSlice({
	name: 'CHARACTER',
	initialState,
	reducers: {
		fetchCharacters(state) {
			// console.log("SLICE STATE:", state);
		}
	},
	extraReducers: (builder) =>  {
		builder.addCase(getCharacters.fulfilled, (state, action) => {
			// console.log("ACTION:", action);
			state.characters = action.payload.results
			state.resultsInfo = action.payload.info
			state.loading = false
		})
	}
});

export const { fetchCharacters } = characterSlice.actions
export default characterSlice;
