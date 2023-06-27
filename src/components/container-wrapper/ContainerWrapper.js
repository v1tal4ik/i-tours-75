import React from 'react';
import { Outlet } from 'react-router-dom';

const ContainerWrapper = () => {
	return (
		<div style={{ background: 'red', padding: '20px 40px' }}>
			<h1>ContainerWrapper</h1>
			<Outlet />
		</div>
	);
};

export default ContainerWrapper;
