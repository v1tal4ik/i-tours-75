import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const TourDetails = () => {
	const { tourId } = useParams();
	const {
		state: { id },
	} = useLocation();

	useEffect(() => {
		console.log('fetch data for tour', tourId);
	}, [tourId]);

	return (
		<div className='container'>
			<h1>Tour details for:{id} </h1>
		</div>
	);
};

export default TourDetails;
