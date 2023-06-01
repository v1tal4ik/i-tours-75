import styled from 'styled-components';

export const AppStyled = styled.div`
	background: #c99;
	${({ foo }) => {
		if (foo === '123') {
			return { color: 'red' };
		}
		return { color: 'yellow' };
	}}
`;
