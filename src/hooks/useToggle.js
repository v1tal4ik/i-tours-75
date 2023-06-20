import { useState } from 'react';

const useToggle = (value) => {
	const [visible, setVisible] = useState(value);

	const open = () => {
		setVisible(true);
	};
	const close = () => {
		setVisible(false);
	};
	const toggle = () => {
		setVisible((value) => !value);
	};

	return { visible, open, close, toggle };
};

export default useToggle;
