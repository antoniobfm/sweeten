import styled, { css } from 'styled-components';

interface ContainerProps {
	isFocused: boolean;
	isFilled: boolean;
	isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
	height: 3rem;
	border-radius: 0.375rem;

	display: flex;
	flex-direction: row;

	position: relative;
	padding: 0 1rem;
	margin-bottom: 1rem;

	border: 1px solid #222425;

	input {
		width: 100%;

		font-size: 1.125rem;
		font-weight: 400;
		background-color: transparent;
		border: none;
		outline: none;

		color: white;

		:focus {
			~ label {
				color: white;
			}
		}
	}

	label {
		top: -0.4375rem;
		position: absolute;
		background-color: #181A1B;
		padding: 0 0.625rem;
		margin-left: -0.625rem;

		font-size: 0.5625rem;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.5);

		transition: 0.2s;
	}

	${props =>
		props.isErrored &&
		css`
			color: #c53030;
			border-color: #c53030;
		`}

	${props =>
		props.isFocused &&
		css`
			color: white;
			border-color: white;
		`}

	${props =>
		props.isFilled &&
		css`
			color: white;
		`}
`;
