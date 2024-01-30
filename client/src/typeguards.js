export function isResponse(response) {
	return 'data' in response;
}