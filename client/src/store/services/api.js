import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://127.0.0.1:8000/solve_task',
	}),
	endpoints: (build) => ({
		baseSolve: build.mutation({
			query: ({type, ...payload}) => ({
				url: `?alg_key=${type}`, method: 'GET', params: payload
			})
		}),
	})
});

export const {useBaseSolveMutation} = api;