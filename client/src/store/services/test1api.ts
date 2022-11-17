import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const test1api = createApi({
	reducerPath: 'firstTest',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://192.168.54.10:8000/solve_task',
	}),
	endpoints: (build) => ({
		gcdEx: build.mutation<{data: Array<string | Array<Array<number>>>}, {args: [number, number]}>({
			query: (payload) => ({
				url: '?alg_key=ext_bin_gcd',
				method: 'GET',
				params: payload
			})
		})
	})
});

export const {useGcdExMutation} = test1api;
