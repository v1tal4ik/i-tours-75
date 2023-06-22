import { DARK, LIGHT } from 'constans';
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(DARK);

	const onChangeTheme = () => {
		setTheme((prevTheme) => (prevTheme === DARK ? LIGHT : DARK));
	};

	return (
		<ThemeContext.Provider
			value={{
				theme,
				onChangeTheme,
			}}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
