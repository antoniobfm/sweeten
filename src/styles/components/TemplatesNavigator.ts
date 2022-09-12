import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  position: relative;

  #click--area {
    width: 100%;
    padding: 1rem 0;
    background-color: rgba(255, 0, 0, 0);

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;

    ::before {
      content: '';
      z-index: -2;
      position: absolute;
      margin-top: -6.25rem;
      width: 100%;
      height: 6.25rem;
    }
  }
`;

interface TemplateOptionProps {
  isSelected: boolean;
}

export const TemplateOption = styled.button<TemplateOptionProps>`
  flex: 1 0 calc(25% - 1rem);
  height: 3rem;
  background: ${props => props.isSelected ? 'linear-gradient(91.27deg, rgba(255, 255, 255, 0.06) 0%, rgba(24, 26, 27, 0) 100%), #181A1B' : '#0D0E0F'};
  margin: 0 0.5rem 1rem;

  color: ${props => props.isSelected ? '#f2f2f2' : '#535354'} ;
  border: 1px solid ${props => props.isSelected ? '#525455' : '#101011'};
  outline: none;

  text-align: left;
  padding-left: 1rem;

  font-size: 0.8125rem;
  font-family: Poppins;
  font-weight: 600;

  border-radius: 0.375rem;

  :hover {
    background: ${props => props.isSelected ? 'linear-gradient(91.27deg, rgba(255, 255, 255, 0.06) 0%, rgba(24, 26, 27, 0) 100%), #181A1B' : '#181A1B'};
    color: ${props => props.isSelected ? '#f2f2f2' : '#535354'};
    border: 1px solid ${props => props.isSelected ? '#525455' : '#222425'};
    cursor: pointer;
  }
`;