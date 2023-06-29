import React from 'react';
import { Outlet } from 'react-router-dom';

const ContainerWrapper = () => {
	return (
		<div style={{ background: 'red', padding: '20px 40px' }}>
			<Outlet />
		</div>
	);
};

export default ContainerWrapper;
