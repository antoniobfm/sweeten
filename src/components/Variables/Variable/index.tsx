import { Container } from './styles';
import { motion, useAnimation } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

interface IProps {
  handleRemoveVariable: any;
  index: number;
  handleVariableChange: any;
  itemContent: string;
  isSelected: boolean;
}

export default function Variable({handleRemoveVariable, index, handleVariableChange, itemContent, isSelected}: IProps) {
  const [confirm, setConfirm] = useState(false);

  let inputRef = useRef<HTMLInputElement>();

  const controls = useAnimation();

  const confirmRemoval = useCallback(() => {
    console.log(confirm);
    if (confirm === false) {
      setConfirm(true)
      return;
    }
    handleRemoveVariable({contentIndex: index, interactionAnimation: controls})
    setConfirm(false);
  }, [confirm]);

  useEffect(() => {
    if(isSelected && inputRef.current && index === 0) {
      inputRef.current.focus();
      console.log('ok');
    }
  }, [isSelected, inputRef]);

  return (
    <Container confirm={confirm}>
      <motion.input
        animate={controls}
        ref={inputRef}
        autoFocus={true} 
        type="text" 
        placeholder="Digite aqui" 
        value={confirm ? 'Clique novamente para deletar' : itemContent} 
        onChange={(e) => handleVariableChange({contentIndex: index, value: e.target.value})}
      />
      <button type="button" onClick={confirmRemoval} onMouseLeave={() => setConfirm(false)}>
        <div>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.757324 0.757324L9.24261 9.24261" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M0.757395 9.24261L9.24268 0.757324" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </div>
      </button>
    </Container>
  );
}
