import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URI : string = "https://rickandmortyapi.com/api"

export const getCharacters = createAsyncThunk(
	'characters/getCharacters',
	async () => {
		try {
			// const response = await customerService.getCustomers();
			// if (response.status >= 200 && response.status < 300) {
			// 	const { data } = response;
			// 	return data.data.Users;
			// }

			const req = await fetch(`${BASE_URI}/character`, {
				method: "GET"
			})

			if (req) {
				const data = await req.json()
				
				return data
			}
		} catch (error) {
			 console.log(error);
			 
		}
	}	
);
