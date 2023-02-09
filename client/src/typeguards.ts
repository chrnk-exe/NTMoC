import {FetchBaseQueryError} from '@reduxjs/toolkit/query';
import {SerializedError} from '@reduxjs/toolkit';

export function isResponse<T = unknown>(response: {error: FetchBaseQueryError | SerializedError} | {data: T}): response is {data: T} {
	return 'data' in response;
}