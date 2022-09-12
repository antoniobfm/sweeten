import styled from 'styled-components';

export const Container = styled.div`
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
    background: #181A1B;
    backdrop-filter: blur(10px);
    border-radius: 0.375rem;
    border: 1px solid rgba(34, 36, 37, 1);

    box-shadow: 0 0.25rem 0.5rem rgba(10, 10, 10, 0.2);

    padding: 1.5rem;
  }
`;

export const SettingsContainer = styled.main`
  flex: 1;

  padding-top: 1rem;

  h2 {
    padding: 1rem 0 0;
  }

  h5 {
    padding-top: 0.75rem;
    align-self: flex-end;
    opacity: 0.5;
  }
  
  > button {
    background: none;
    border: none;
    outline: none;
    width: 100%;

    color: #f2f2f2;
    opacity: 0.5;
    font-family: Poppins;
    padding-top: 1rem;

    transition: 0.2s all;

    :hover {
      opacity: 1;
      cursor: pointer;
    }
  }

  .logout {
    font-size: 0.875rem;
  }
`;
