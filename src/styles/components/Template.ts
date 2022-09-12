import styled, { css } from 'styled-components';

interface ContainerProps {
	isFilled: boolean;
	isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
	position: relative;

	height: 24vh;
	padding: 0 1.5rem;
	background-color: #181A1B;
  
	display: flex;
	justify-content: center;
	align-items: center;

	p {
		text-align: center;
		line-height: 1.75rem;
		font-size: 1rem;
		font-weight: 100;
		color: #8C8D8D;

		strong {
			color: #8C8D8D;
		}
	}

	:hover {
		background: #2A2E30;

		div {
			visibility: visible;
		}

    p {
      color: #f2f2f2;

			strong {
				color: #f2f2f2;
			}
    }
	}
`;

export const TemplateButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	max-width: 100%;
	height: 22%;
	border-top: 0;
	border-right: 0;
	bottom: 0;
	visibility: hidden;

	button {
		outline: none;
    background: none;
		border: none;
		padding: 0 0.75rem;
		margin: 3px;
		height: 70%;
		font-size: 1rem;
    opacity: 0.5;
  	letter-spacing: 0.5px;
		font-weight: 500;
		border-radius: 0.8rem;
		font-family: 'Poppins';
		cursor: pointer;
		transition: 0.2s opacity;

		svg {
			width: 1rem;
			height: 100%;
		  color: #f2f2f2;
		}

		:hover {
			opacity: 1;
		}
	}
`;