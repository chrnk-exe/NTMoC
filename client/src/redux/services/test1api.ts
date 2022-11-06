import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const test1api = createApi({
	reducerPath: 'firstTest',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:5000',
	}),
	endpoints: (build) => ({
		gcdEx: build.mutation<BinGCDOutput, BinGCDInput>({
			query: (payload) => ({
				url: '/bin_gcd',
				method: 'POST',
				body: payload
			})
		})
	})
});
