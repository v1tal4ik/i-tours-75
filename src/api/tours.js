import HTTPClient from './config';

const errorAPIMessages = {
	404: 'Такого туру не існує, сиди вдома :(',
	common: 'Щось пішло не так. Спробуйте ще раз пізніше.',
};

export const fetchTours = (query) => {
	const url = query ? `/tours?name_like=${query}` : '/tours';

	return HTTPClient.get(url, {
		transformResponse: [
			(data) => {
				const items = JSON.parse(data);
				return {
					total_items: items.length,
					items,
				};
			},
		],
	})
		.then((response) => response.data)
		.catch((err) => {
			throw Error(errorAPIMessages[err.response?.status || 'common']);
		});
};

export const addTour = (tour) => {
	return HTTPClient.post('/tours', tour).catch((err) => {
		throw Error(errorAPIMessages[err.response?.status || 'common']);
	});
};

export const removeTour = (tourId) => {
	return HTTPClient.delete(`/tours/${tourId}`).catch((err) => {
		throw Error(errorAPIMessages[err.response?.status || 'common']);
	});
};
