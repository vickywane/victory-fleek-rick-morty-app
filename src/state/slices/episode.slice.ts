import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Episode } from '../../types';
import {
     getEpisodeDetails
} from '../actions/episode.action';

interface EpisodeState {
    loadError: boolean,
    loading: boolean,
    episode: Episode
    currentEpisodeTab: number;
}

const initialState: EpisodeState = {
    episode: {} as Episode,
    currentEpisodeTab: 1,
    loadError: false,
    loading: true,
}

const characterSlice = createSlice({
    name: 'EPISODE',
    initialState,
    reducers: {
        setCurrentEpisode(state, action: PayloadAction<number>) {
            state.currentEpisodeTab = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getEpisodeDetails.fulfilled, (state, action) => {
            state.episode = action.payload

            state.loading = false
        })
    }
});

export const { setCurrentEpisode  } = characterSlice.actions
export default characterSlice;