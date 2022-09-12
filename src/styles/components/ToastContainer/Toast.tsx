import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: number;
}

const toastTypeVariations = {
  info: css`
		background: #2D9CDB99;
		color:  rgba(255, 255, 255, 0.95);
	`,

  success: css`
		background: #1C7D4599;
		color: rgba(255, 255, 255, 0.95);
	`,

  error: css`
		background: #EB575799;
		color: rgba(255, 255, 255, 0.95);
	`,
};

export const Container = styled(motion.div) <ContainerProps>`
	width: 20vw;
	margin: auto;
  backdrop-filter: blur(3px);
  text-align: center;
  box-sizing: border-box;
	position: relative;
	padding: 0;
	/* margin: 30px;
	border-radius: 10px; */
	box-shadow: 0px 0.25rem 0.5rem rgba(0, 0, 0, 0.2);

	display: flex;

	border-radius: 0.375rem;

  strong {
		font-size: 0.875rem;
		line-height: 2.5rem;
    margin: 0;
    padding: 0;
  }

	& + div {
		margin-top: 0.5rem;
	}

	${props => toastTypeVariations[props.type || 'info']}
	> svg {
		margin: 0.25rem 0.75rem 0 0;
	}

	div {
		flex: 1;

		p {
			margin-top: 0.25rem;
			font-size: 0.875rem;
			opacity: 0.8;
			line-height: 1.25rem;
		}
	}

	button {
		position: absolute;
		right: 1rem;
		top: 1.1875rem;
		opacity: 0.6;
		border: 0;
		background: transparent;
		color: inherit;
	}

	${props =>
    !props.hasDescription &&
    css`
			align-items: center;

			svg {
				margin-top: 0;
			}
		`}
`;
