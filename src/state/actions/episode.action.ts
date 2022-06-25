import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URI: string = "https://rickandmortyapi.com/api"

interface GetCharacterOpts {
	episodeId?: number
}

export const getEpisodeDetails = createAsyncThunk(
	'episodes/getEpisodeDetails',
	async ({ episodeId = 1 }: GetCharacterOpts) => {
		if (!episodeId) return

		try {
			const req = await fetch(`${BASE_URI}/episode/${episodeId}`)

			if (req) {
				const data = await req.json()
				
				return data
			}
		} catch (error) {
			console.log(error);
		}
	}
);
