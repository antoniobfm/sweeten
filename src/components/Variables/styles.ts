import styled from 'styled-components';

export const Container = styled.div`
  
`;

interface IOneVariableProps {
  isSelected: boolean;
  amount: number;
}

export const VariableWrapper = styled.div<IOneVariableProps>`
  width: 100%;
  min-width: 325px;
  min-height: 3.5rem;
  height: ${props => props.isSelected ? 6 + 1.5 + 4.77 * (props.amount) : '4'}rem;
  padding: 0 1rem;
  border-bottom: 0.1rem solid #292929;

  display: flex;
  flex-direction: column;

  transition: 0.2s all;

  > div:nth-child(1) {
    width: 100%;
    height: 3.5rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    svg {
      color: #f2f2f2;
      transition: all 0.2s;
      font-size: 0.833rem;
    }
  }

  h2 {
    line-height: 4rem;
    color: ${props => props.isSelected ? '#f2f2f2' : '#8C8D8D'};
    font-weight: 500;
  }

  #variables--inputs--wrapper {
    transform: ${props => props.isSelected ? 'scaleY(1)' : 'scaleY(0)'};    
    transform-origin: top;

    > button {
      width: 100%;
      height: 1.5rem;

      background: none;
      border: none;
      outline: none;

      text-align: right;

      cursor: pointer;


      h3 {
        color: #8C8D8D;
        transition: 0.2s all;
      }

      :hover {
        h3 {
          color: #f2f2f2;
        }
      }
    }
  }

  :hover {
    background: ${props => props.isSelected ? '' :
    'linear-gradient(91.27deg, rgba(255, 255, 255, 0.02) 0%, rgba(24, 26, 27, 0) 100%), #181A1B'};
    cursor: ${props => props.isSelected ? 'default' : 'pointer'};
  }
`;