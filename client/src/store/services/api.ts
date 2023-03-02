import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const api = createApi({
	reducerPath: 'firstTest',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://192.168.145.10:8000/solve_task',
	}),
	endpoints: (build) => ({
		gcdEx: build.mutation<APIResponse, { args: [number, number] }>({
			query: (payload) => ({
				url: '?alg_key=ext_bin_gcd',
				method: 'GET',
				params: payload
			})
		}),
		karatsuba: build.mutation<APIResponse, { args: [number, number] }>({
			query: (payload) => ({
				url: '?alg_key=karatsuba',
				method: 'GET',
				params: payload
			})
		}),
		linearComparison: build.mutation<APIResponse, { args: [number, number, number] }>({
			query: (payload) => ({
				url: '?alg_key=solve_comparison',
				method: 'GET',
				params: payload
			})
		}),
		binGcd: build.mutation<APIResponse, { args: [number, number] }>({
			query: (payload) => ({
				url: '?alg_key=bin_gcd',
				method: 'GET',
				params: payload
			})
		}),
		addDouble: build.mutation<APIResponse, { args: [number, number, number] }>({
			query: (payload) => ({
				url: '?alg_key=add_double',
				method: 'GET',
				params: payload
			})
		}),
		gelfondShanks: build.mutation<APIResponse, {args: [number, number, number] }> ({
			query: (payload) => ({
				url: '?alg_key=gelfond_shanks',
				method: 'GET',
				params: payload
			})
		})
	})
});

export const {
	useGcdExMutation,
	useKaratsubaMutation,
	useLinearComparisonMutation,
	useBinGcdMutation,
	useAddDoubleMutation,
	useGelfondShanksMutation
} = api;
