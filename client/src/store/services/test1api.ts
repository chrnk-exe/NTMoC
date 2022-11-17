import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const test1api = createApi({
	reducerPath: 'firstTest',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://192.168.54.10:8000/solve_task',
	}),
	endpoints: (build) => ({
		gcdEx: build.mutation<APIResponse, {args: [number, number]}>({
			query: (payload) => ({
				url: '?alg_key=ext_bin_gcd',
				method: 'GET',
				params: payload
			})
		}),
		karatsuba: build.mutation<APIResponse, {args: [number, number]}>({
			query: (payload) => ({
				url: '?alg_key=karatsuba',
				method: 'GET',
				params: payload
			})
		})
	})
});

export const {useGcdExMutation, useKaratsubaMutation} = test1api;
