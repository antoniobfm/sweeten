import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #0A0A0B;
    color: rgba(255, 255, 255, 0.95);
    font-family: 'Nunito', Arial, Helvetica, sans-serif;

    height: 100vh;
    overflow: hidden;
  }

  .blurred__background {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 10;
    
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;

    h1 {
      text-align: center;
    }
  }
  
  :root {
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) { 
      font-size: 6px;
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
      font-size: 10px;
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
      font-size: 14px;
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
      font-size: 14px;
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1600px) {
      font-size: 14px;
    }

    // Extra large devices (large desktops, 1920px and up)
    @media (min-width: 1920px) {
      font-size: 14px;
    }
  }
  
  h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 2.074rem;
    line-height: 44px;
    letter-spacing: -0.02em;
  }

  h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 25px;
    letter-spacing: -0.02em;
  }

  h3 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 0.833rem;
    line-height: 18px;


    color: #F2F2F2;
  }

  p {
    font-size: 1rem;
    line-height: 1.0625rem;
  }

  h4 {
    font-size: 1rem;
  }

  h5 {
    font-size: 0.8125rem;
  }

  h6 {
    font-size: 0.5625rem; 
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  button {
    font-family: 'Nunito', Arial, Helvetica, sans-serif;
  }

  input[type="datetime-local"] {
    color: #f2f2f2;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 1rem;
    background-color: transparent;
    appearance: none;
  }

  .form__quantity {
    display: flex;
    flex-direction: row;

    .form__field__container {
      :first-child {
        margin-right: 0.5rem;
      }
    }

  }

  .form__macros {
    display: flex;
    flex-direction: row;

    .macro {
      :nth-child(2) {
      margin: 0 0.5rem;
    }
    }
  }

  .form__field__container {
    height: 3.5rem;
    border-radius: 0.375rem;

    display: flex;
    flex-direction: row;

    position: relative;
    padding: 0 1rem;
    margin-bottom: 1rem;

    border: 1px solid #222425;

    input {
      width: 100%;

      font-size: 1.125rem;
      font-weight: 400;
      background-color: transparent;
      border: none;
      outline: none;

      color: white;

      :focus {
        ~ label {
          color: white;
        }
      }
    }

    label {
      top: -0.4375rem;
      position: absolute;
      background-color: #181A1B;
      padding: 0 0.625rem;
      margin-left: -0.625rem;

      font-size: 0.5625rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.5);

      transition: 0.2s;
    }
  }
`;