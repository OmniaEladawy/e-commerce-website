export const getPriceQueryParams = (queryParams, key, value) => {
	const hasValueInParam = queryParams.has(key);

	if (value && hasValueInParam) {
		queryParams.set(key, value);
	} else {
		queryParams.append(key, value);
	}
};
