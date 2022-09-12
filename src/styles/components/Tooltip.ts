import styled from 'styled-components';

export const Container = styled.div`
	//Se n for absoluto o overflow-y scroll vai comer
	position: relative;
  z-index: 2;
	right: 0;

  font-family: Poppins;

	span {
		width: auto;
    white-space: nowrap;
		padding: 0.75rem 1.5rem 0.75rem 1rem;

		position: absolute;
    margin-top: -2.20rem;
		transform: translateX(-110%);

		color: #312e38;
		border-radius: 6px;
		transition: all 0.3s;
		visibility: hidden;
		opacity: 0;
		font-size: 0.75rem;
		font-weight: 600;
		background: #f2f2f2;

    display: flex;
    align-items: center;
		box-shadow: 0 0.25rem 0.5rem rgba(10, 10, 10, 0.2);
    border: 1px solid #292929;
		/* &::before {
			content: '';
			border-style: solid;
			border-color: #f2f2f2 transparent;
			border-width: 6px 6px 0 6px;
			top: 50%;
			position: absolute;
			left: 90%;
			transform: rotate(-90deg);
		} */
	}
  /* .triangle {
    position: absolute;
    right: 0;
    margin-right: -0.45rem;
		bottom: calc(25%);
    background: #f2f2f2;
    transform: rotate(45deg) scale(0.5);
    width: 1rem;
    height: 1rem;
  } */

  :hover > svg {
    opacity: 1;
    color: #f2f2f2;
    cursor: inherit;
  }

	&:hover span {
		opacity: 1;
		visibility: visible;
	}
`;
