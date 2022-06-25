import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import {
	getSingleCharacter,
	getCharacters,
} from '../actions/character.action';
import { Character } from '../../types';

interface CharacterState {
	characters: Array<Character>,
	character: Character,
	loadError: boolean,
	loading: boolean,
	resultsInfo: Record<string, number>
}

const initialState: CharacterState = {
	characters: [],
	character: {} as Character,
	loadError: false,
	loading: true,
	resultsInfo: {}
}

const characterSlice = createSlice({
	name: 'CHARACTER',
	initialState,
	reducers: {
		setCharacter(state, action: PayloadAction<Character>) {
			state.character = action.payload
		}
	},
	extraReducers: (builder) =>  {
		builder.addCase(getCharacters.fulfilled, (state, action) => {
			state.characters = action.payload.results
			state.resultsInfo = action.payload.info
			state.loading = false
		})
		
		builder.addCase(getSingleCharacter.fulfilled, (state, action) => {
			state.character = action.payload
			state.loading = false
		})
	}
});

export const { setCharacter } = characterSlice.actions
export default characterSlice;
