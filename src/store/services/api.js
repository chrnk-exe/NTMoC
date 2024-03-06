import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: '/api',
	}),
	endpoints: (build) => ({
		baseSolve: build.mutation({
			query: ({type, ...payload}) => ({
				url: `/solve_task/?alg_key=${type}`, method: 'GET', params: payload
			})
		}),
	})
});

export const {
	useBaseSolveMutation,
} = api;
