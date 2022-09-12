import styled from 'styled-components';
import { lighten, saturate } from 'polished';


export const Container = styled.button`
  width: 82%;
  height: 3rem;

  background: linear-gradient(111.07deg, #27AE60 0%, rgba(39, 174, 96, 0.3) 100%), #181A1B;
  border: 1px solid #1E854A;
  border-radius: 0.375rem;

  font-size: 0.75rem;
  font-weight: 600;
  color: #D5F6E3;

  font-family: Poppins;

  cursor: pointer;

  transition: 0.2s all;

  :hover {
    /* filter: brightness(1.2); */
    background: linear-gradient(111.07deg, #27AE60 0%, rgba(39, 174, 96, 0.4) 100%), #181A1B;
    color: ${saturate(0.05, '#d5f6e3')};
    border-color: ${lighten(0.075, '#1E854A')};
  }
`;
