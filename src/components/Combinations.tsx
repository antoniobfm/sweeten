import { useVariables } from '@/hooks/variables';
import { Container } from '@/styles/components/Combinations';
import combineOne from '@/utils/Combinations/oneVariable';
import combineThree from '@/utils/Combinations/threeVariables';
import combineTwo from '@/utils/Combinations/twoVariables';
import { Form } from '@unform/web';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import TemplateContainer from './dumbTemplate';
import Variables from './Variables';

interface HeadlineTemplatesI {
  id: string;
  formula: string;
  formulaRaw: string;
  variables: number[];
  premium: boolean;
}

interface IProps {
  setState: any;
  template: HeadlineTemplatesI;
}

export default function Combinations({ setState, template }: IProps) {
  const [selectedVariable, setSelectedVariable] = useState('desejo');
  const [combinations, setCombinations] = useState(null);
  const [amountOfCombinations, setAmountOfCombinations] = useState(0);
  const node = useRef<HTMLDivElement>();
  const formRef = useRef();

  const [open, setOpen] = useState(true);

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      console.log("clicking inside");
      return;
    }
    // outside click
    setState(false);
  };

  const escFunction = useCallback((event) => {
    if(event.keyCode === 27) {
      setState(false);
    }
  }, []);

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", escFunction, false);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [open]);

  const { variables } = useVariables();

  useEffect(() => {
    const amountOfVariablesInTemplate = template.variables.length;

    let combined;
    if (amountOfVariablesInTemplate === 1) {
      combined = combineOne(variables[template.variables[0]]);
    } 
    else if (amountOfVariablesInTemplate === 2) {
      combined = combineTwo([variables[template.variables[0]], variables[template.variables[1]]]);
    }
    else if (amountOfVariablesInTemplate === 3) {
      combined = combineThree([variables[template.variables[0]], variables[template.variables[1]], variables[template.variables[2]]]);
    }
    setAmountOfCombinations(combined.amount);
    setCombinations(combined.combined);
  }, [variables]);

  return (
    <AnimateSharedLayout>
      <Container
        initial={{ opacity: 0, background: 'transparent', backdropFilter: 'none' }}
        transition={{ ease: "linear", duration: 0.3 }}
        animate={{ opacity: 1, background: 'rgba(10, 10, 11, 0.2)', backdropFilter: 'blur(8px)' }}
        exit={{ opacity: 0, background: 'transparent', backdropFilter: 'none' }}
      >
        <motion.div 
          initial={{ marginTop: '100%', opacity: 0, transform: 'scale(0.9)' }}
          transition={{ ease: "easeOut", duration: 0.3 }}
          animate={{ marginTop: '0%', opacity: 1, transform: 'scale(1)' }}
          exit={{ marginTop: '100%', opacity: 0 }}
          id="settings" 
          ref={node}>
          <div id="templates--wrapper">
            <h1>Combinações - {amountOfCombinations}</h1>
            <div id="templates--navigator">
              <Form ref={formRef} onSubmit={() => { }}>
                {combinations &&
                  combinations.map(item =>
                    <TemplateContainer
                      key={template.id}
                      name={template.id + 'C'}
                      placeholder={template.formula}
                      format={template.formula}
                      variables={template.variables}
                      variablesInput={item}
                    />
                  )
                }
              </Form>
            </div>
          </div>
          <div id="variables--wrapper">
            <h1>Variáveis</h1>
            <div id="variables--navigator">
              {variables && variables.map((item, index) =>
                template.variables.includes(item.index) &&
                <Variables variables={item} setSelectedVariable={setSelectedVariable} open />
              )}
            </div>
          </div>
          {/* <div id="templates--navigator">
              <Form ref={formRef} onSubmit={() => {}}>
                {combinations &&
                  combinations[0].map(item => 
                  <TemplateContainer 
                    key={template.id}
                    name={template.id + 'C'}
                    placeholder={template.formula}
                    format={template.formula}
                    variables={template.variables}
                    variablesInput={item}
                  />
                )
                }
              </Form>
            </div>
            <aside id="variables--wrapper">
              <div id="variables--container">
                {variables && variables.map((item, index) => 
                template.variables.includes(item.index) &&
                <Variables variables={item} open />
                )}
              </div>
            </aside> */}
        </motion.div>
      </Container>
    </AnimateSharedLayout>
  );
}
