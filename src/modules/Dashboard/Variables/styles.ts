import styled from 'styled-components';

export const Container = styled.aside`
height: 100%;

display: flex;
flex-direction: column;

#variables--container {
  flex: 1;
  width: 100%;
  
  background: #181A1B;
  border: 1px solid #222425;
  border-radius: 0.375rem;

  overflow-y: scroll;
  overflow-x: visible;

  ::-webkit-scrollbar {
    display: none;
  }
}

#bottom--menu {
  width: 100%;

  margin-top: 1rem;
  height: 3rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  #settings {
    flex: 1 0 66.5%;
    max-width: calc(66.5% - 0.5rem);
    height: 100%;
    border-radius: 0.375rem;

    background: #181A1B;
    border: 1px solid #222425;

    :hover {
      cursor: pointer;
      background: linear-gradient(91.27deg, rgba(255, 255, 255, 0.02) 0%, rgba(24, 26, 27, 0) 100%), #181A1B;
      
      svg {
        color: #f2f2f2;
      }
    }

    svg {
      font-size: 1rem;
      color: #7E7E7F;
    }
  }

  #discord {
    background: transparent;
    border: none;
    outline: none;

    a {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        transition: 0.2s all;
        width: 100%;
        fill: #7E7E7F;
      }
    }
    
    :hover {
      cursor: pointer;

      a {
        svg {
          fill: #f2f2f2;
        }
      }
    }
  }
}
`;
