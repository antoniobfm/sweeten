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
  backdrop-filter: blur(4px);

  padding: 5rem 0;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  #settings {
    width: 50%;
    height: 80%;
    background: #181A1B;
    backdrop-filter: blur(10px);
    border-radius: 0.375rem;
    border: 1px solid rgba(34, 36, 37, 1);

    box-shadow: 0 0.25rem 0.5rem rgba(10, 10, 10, 0.2);

    padding: 1.5rem;
  }
`;


export const LoginContainer = styled.main`
  flex: 1;
  margin: 0 1rem;
  padding: 0 1rem 1.5rem;


  display: flex;
  flex-direction: column;

  background: #181A1B;
  box-shadow: 0px 0.5rem 1.5rem rgba(0, 0, 0, 0.25);
  border-radius: 0.375rem;
  border: 1px solid #222425;

  h2 {
    padding: 1rem 0 0;
  }

  h5 {
    padding-top: 0.75rem;
    align-self: flex-end;
    opacity: 0.5;
  }

  > div {
    position: relative;
    padding-top: 1.5rem;
  }
`;
