import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://127.0.0.1:8000/solve_task',
	}),
	endpoints: (build) => ({
		// ======= Calculators =======\
		gcdEx: build.mutation({
			query: (payload) => ({
				url: '?alg_key=ext_bin_gcd', method: 'GET', params: payload
			})
		}),
		karatsuba: build.mutation({
			query: (payload) => ({
				url: '?alg_key=karatsuba', method: 'GET', params: payload
			})
		}),
		binGcd: build.mutation({
			query: (payload) => ({
				url: '?alg_key=bin_gcd', method: 'GET', params: payload
			})
		}),
		addDouble: build.mutation({
			query: (payload) => ({
				url: '?alg_key=add_double', method: 'GET', params: payload
			})
		}),
		fastPow: build.mutation({
			query: (payload) => ({
				url: '?alg_key=fast_pow', method: 'GET', params: payload
			})
		}),
		toCC: build.mutation({
			query: (payload) => ({
				url: '?alg_key=to_cc', method: 'GET', params: payload
			})
		}),

		// ======= Factorization =======
		dixon: build.mutation({
			query: (payload) => ({
				url: '?alg_key=dixon', method: 'GET', params: payload
			})
		}),
		pollard: build.mutation({
			query: (payload) => ({
				url: '?alg_key=pollard', method: 'GET', params: payload
			})
		}),
		pollardFloyd: build.mutation({
			query: (payload) => ({
				url: '?alg_key=pollard_floyd', method: 'GET', params: payload
			})
		}),
		p1Pollard: build.mutation({
			query: (payload) => ({
				url: '?alg_key=p_1_pollard', method: 'GET', params: payload
			})
		}),
		fermat: build.mutation({
			query: (payload) => ({
				url: '?alg_key=fermat', method: 'GET', params: payload
			})
		}),

		// ======= Discrete Logarithms =======
		gelfondShanks: build.mutation ({
			query: (payload) => ({
				url: '?alg_key=gelfond_shanks', method: 'GET', params: payload
			})
		}),

		// ======= Comparisons =======
		linearComparison: build.mutation({
			query: (payload) => ({
				url: '?alg_key=solve_comparison', method: 'GET', params: payload
			})
		}),
	})
});

export const {
	// ======= Calculators =======
	useBaseSolveMutation,

	useGcdExMutation,
	useKaratsubaMutation,
	useBinGcdMutation,
	useAddDoubleMutation,
	useFastPowMutation,
	useToCCMutation,

	// ======= Factorization =======
	useDixonMutation,
	usePollardMutation,
	usePollardFloydMutation,
	useP1PollardMutation,
	useFermatMutation,

	// ======= Discrete Logarithms =======
	useGelfondShanksMutation,

	// ======= Comparisons =======
	useLinearComparisonMutation,

} = api;
