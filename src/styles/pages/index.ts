import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.5rem 2rem;
  height: 100vh;

  display: grid;
  grid-template-columns: 7fr 2fr;

  column-gap: 2rem;

  h1 {
    padding-bottom: 1rem;
  }
`;

interface IVariableProps {
  isSelected: boolean;
}

export const TemplatesWrapper = styled.main<IVariableProps>`
  overflow: hidden;
  max-height: 100%;

  display: flex;
  flex-direction: column;

  > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      transition: 0.3s;
      transform: rotate(${props => props.isSelected ? '180deg' : '0deg' });
      opacity: ${props => props.isSelected ? '1' : '0'};
      margin-left: 0.5rem;
      margin-top: -14px;
      color: #7E7E7F;
      height: 1.5rem
    }

    h1:hover {
      cursor: pointer;
      ~ svg {
        opacity: ${props => props.isSelected ? '1' : '0.5'};
      }
    }
  }

  #templates--container {
    overflow-y: scroll;

    width: 100%;
    border: 1px solid #222425;
    border-radius: 0.375rem;
    
    padding-bottom: 4rem;
    background-color: #181A1B;
    
    position: relative;
    z-index: 1;

    ::-webkit-scrollbar {
      display: none;
    }

    form {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }

    /* ::before {
      content: '';
      position: absolute;
      bottom: 0;
      border-bottom-left-radius: 0.375rem;
      border-bottom-right-radius: 0.375rem;
      width: 100%;
      height: 50px;
      background: linear-gradient(180deg, rgba(24, 26, 27, 0) 0%, #181A1B 100%);

      z-index: 4;
    } */
  }
`;
