import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TourDetails = () => {
	const { tourId } = useParams();

	useEffect(() => {
		console.log('fetch data for tour', tourId);
	}, [tourId]);

	return (
		<div className='container'>
			<h1>Tour details for:{tourId} </h1>
		</div>
	);
};

export default TourDetails;
