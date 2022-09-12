import styled from 'styled-components';

interface IProps {
  confirm: boolean;
}

export const Container = styled.div<IProps>`
  width: 100%;
  min-height: 3.5rem;
  position: relative;
  margin-bottom: 1rem;

  input {
    overflow: hidden;
    width: 100%;
    min-height: 3.5rem;
    outline: none;
    border: 0.1rem solid ${props => props.confirm ? '#D02F2F' : '#222425'};
    border-radius: 0.5rem;
    padding: 1rem 1rem;
    color: ${props => props.confirm ? '#D64848' : 'white'};
    transition: 0.2s all;

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${props => props.confirm ? 'rgba(255, 247, 247, 0.5)' : '#777777'};
      opacity: 1;
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
      color: ${props => props.confirm ? 'rgba(255, 247, 247, 0.5)' : '#777777'};
      opacity: 1;
    }

    font-size: 1rem;
    font-family: 'Poppins';
    background: ${props => props.confirm ? '#181A1B' 
    : 'linear-gradient(91.27deg, rgba(255, 255, 255, 0.02) 0%, rgba(24, 26, 27, 0) 100%), #181A1B'};
    transition: 0.2s all;

    :focus {
      border: 0.1rem solid #525455;
      background: linear-gradient(91.27deg, rgba(255, 255, 255, 0.06) 0%, rgba(24, 26, 27, 0) 100%), #181A1B;
      ~ button {
        transform: translateX(0px);
        opacity: 1;
        visibility: visible;
      }
    }

    :hover {
      ~ button {
        transform: translateX(0px);
        opacity: 1;
        visibility: visible;
      }   
      background: linear-gradient(91.27deg, rgba(255, 255, 255, 0.06) 0%, rgba(24, 26, 27, 0) 100%), #181A1B;
    }
  }

button {
  transform: translateX(50%);
  visibility: hidden;
  opacity: 0;
  width: 3rem;
  height: 100%;
  background: transparent;
  border-radius: 6px;
  border: none;
  outline: none;
  right: 0;
  top: 0;
  position: absolute;
  z-index: 2;
  transition: all 0.2s;
  cursor: pointer;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 100%;
    border-radius: 6px;
    background: ${props => props.confirm ? 'transparent' : 'transparent'};
    transition: 0.2s all;
  }

  svg {
    z-index: 2;
    position: relative;
    transition: all 0.2s;
    stroke: ${props => props.confirm ? '#D02F2F' : '#747676'};
    font-size: 1rem;
    transition: all 0.2s;
    /* transform: ${props => props.confirm ? 'scale(1.3)' : 'none'}; */
  }

  :hover {
    transform: translateX(0px);
    opacity: 1;
    visibility: visible;

    svg {
      stroke: ${props => props.confirm ? '#D02F2F' : `#f2f2f2`};
    }
  }
}
`;
