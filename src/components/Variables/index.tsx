import { Container, VariableWrapper } from './styles';
import Variable from './Variable';
import { useCallback } from 'react';
import { FiInfo } from 'react-icons/fi';
import Tooltip from '@/components/Tooltip';
import { useVariables } from '@/hooks/variables';

interface IVariable {
  index: number;
  id: string;
  title: string;
  example: string;
  premium: boolean;
  defaultContent: string;
  content: string[];
  showOnFilter: boolean;
}

interface IProps {
  variables: IVariable;
  selectedVariable?: string;
  setSelectedVariable?: any;
  open: boolean;
}

export default function Variables({ variables, selectedVariable, setSelectedVariable, open = false }: IProps) {
  const {addVariable, removeVariable, onInputChange} = useVariables();

  const handleAddVariable = useCallback((index: number) => {
    addVariable(index);
  }, []);

  const handleRemoveVariable = useCallback(({contentIndex, interactionAnimation}) => {
    removeVariable({
      index: variables.index, 
      contentIndex: contentIndex, 
      interactionAnimation: interactionAnimation
    });
  }, []);

  const handleVariableChange = useCallback(({contentIndex, value}) => {
    onInputChange({index: variables.index, contentIndex: contentIndex, value: value});
  }, []);

  return (
    <Container>
        <VariableWrapper key={variables.id} isSelected={variables.id === selectedVariable || open} amount={variables.content.length}>
          <div role="button" onClick={() => setSelectedVariable(variables.id)}>
            <h2>{variables.title}</h2>
            {variables.id === selectedVariable || open ? <Tooltip title={variables.example}><FiInfo opacity={0.5} /></Tooltip> : <h2>{variables.content.length}</h2>}
          </div>
    
          <div id="variables--inputs--wrapper">
            {variables.content.length >= 1 && variables.content.map((itemContent, index) => 
              <Variable 
                key={index + variables.id}
                isSelected={variables.id === selectedVariable || open} 
                handleRemoveVariable={handleRemoveVariable} 
                itemContent={itemContent} 
                index={index} 
                handleVariableChange={handleVariableChange} />
            )}
            <button type="button" onClick={() => { handleAddVariable(variables.index) }}><h3>Adicionar variável</h3></button>
          </div>
        </VariableWrapper>
    </Container>
  );
}
