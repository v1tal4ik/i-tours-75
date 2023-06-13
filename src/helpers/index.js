import { toursArray } from 'data';

export const fetchTours = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				total_items: toursArray.length,
				items: toursArray,
			});
		}, 1000);
	});
};

export const fetchFilteredTours = (query) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const items = toursArray.filter((el) => el.name.toLowerCase().includes(query.toLowerCase()));
			resolve({
				total_items: items.length,
				items,
			});
		}, 3000);
	});
};
