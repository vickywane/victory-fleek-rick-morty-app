import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URI: string = "https://rickandmortyapi.com/api"

interface GetCharacterOpts {
	currentPage?: number;
	status?: string;
	name?: string;
	gender?: string
}

export const getCharacters = createAsyncThunk(
	'characters/getCharacters',
	async ({ currentPage = 1, status, gender, name = "" }: GetCharacterOpts) => {
		try {
			let query = `${BASE_URI}/character/?page=${currentPage}`

			if (status) query = `${query}&status=${status}`
			if (gender) query = `${query}&gender=${gender}`
			if (name) query = `${query}&name=${name}`

			const req = await fetch(query)

			if (req) {
				const data = await req.json()

				return data
			}
		} catch (error) {
			console.log(error);

		}
	}
);
