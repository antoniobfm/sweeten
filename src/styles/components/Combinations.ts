import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 5;
  display: flex;
  justify-content: center;
  background: rgba(10, 10, 11, 0.2);
  backdrop-filter: blur(8px);

  overflow-y: none;

  ::-webkit-scrollbar {
    display: none;
  }

  #settings {
    width: 80%;
    height: 85vh;
    border-radius: 0.375rem;
    /* background: #181A1B; */
    /* backdrop-filter: blur(10px); */
    /* border: 1px solid rgba(34, 36, 37, 1); */

    /* box-shadow: 0 0.25rem 0.5rem rgba(10, 10, 10, 0.2); */

    padding: 1.5rem 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h1 {
      padding-bottom: 1rem;
      text-shadow: 0px 0px 14px #000;
    }

    #templates--wrapper {
      flex: 1 0 70%;
      max-width: calc(70% - 1rem);

      height: 88vh;
      
      #templates--navigator {
        overflow-y: scroll;

        width: 100%;
        height: 100%;
        border-radius: 0.375rem;
        
        padding-bottom: 4rem;
        
        position: relative;
        z-index: 1;

        background: #181A1B;
        backdrop-filter: blur(10px); 
        border: 1px solid rgba(34, 36, 37, 1); 
        box-shadow: 0 0.25rem 0.5rem rgba(10, 10, 10, 0.2);

        form {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        ::-webkit-scrollbar {
          display: none;
        }
      }
    }

    #variables--wrapper {
      flex: 1 0 30%;
      max-width: calc(30% - 1rem);

      height: 88vh;
      
      #variables--navigator {
        overflow-y: scroll;
        overflow-x: hidden;

        width: 100%;
        height: 100%;
        border-radius: 0.375rem;
        
        padding-bottom: 4rem;
        
        position: relative;
        z-index: 1;

        background: #181A1B;
        backdrop-filter: blur(10px); 
        border: 1px solid rgba(34, 36, 37, 1); 
        box-shadow: 0 0.25rem 0.5rem rgba(10, 10, 10, 0.2);
        
        ::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
`;