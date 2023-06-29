import Header from 'components/header/Header';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ContactUs = () => {
	const location = useLocation();
	return (
		<div>
			<h1>Contact Us page</h1>
			<Link to={location.state.from}>Back</Link>
		</div>
	);
};

export default ContactUs;
