import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(10, 10, 11, 0.2);
  backdrop-filter: blur(8px);

  padding: 5rem 0;

  overflow-y: scroll;

	::-webkit-scrollbar {
		display: none;
	}

	#settings {
    width: 20%;
    height: auto;
		background: #181a1b;
		backdrop-filter: blur(10px);
		border-radius: 0.375rem;
		border: 1px solid rgba(34, 36, 37, 1);

		box-shadow: 0 0.25rem 0.5rem rgba(10, 10, 10, 0.2);

		padding: 1.5rem;

		> div > div {
			background: red;
		}

		button {
			margin-top: 1.5rem;
		}
	}
`;

export const ModalContent = styled.div`
	flex: 1;
	
	h1 {
		/* text-align: center; */
		padding-bottom: 1rem;
	}

	> div {
		button {
			width: 50%;
			height: 3rem;
			outline: none;
			font-size: 0.75rem;
			font-weight: 600;
			border-radius: 0.375rem;

			transition: 0.2s all;
		}

		.back {
			border: none;
			color: #939b9f;
			background: none;

			&:hover {
				color: #f2f2f2;
			}
		}

		.confirm {
			background: linear-gradient(
					111.07deg,
					#27ae60 0%,
					rgba(39, 174, 96, 0.5) 100%
				),
				#181a1b;
			border: 1px solid #1e854a;
			color: #d5f6e3;

			&:hover {
				filter: brightness(1.1);
			}
		}
	}
`;
