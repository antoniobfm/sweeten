import TemplateContainer from '@/components/Template';
import { Container, TemplatesWrapper } from '@/styles/pages';
import HeadlineTemplates from '@/data/headlineTemplates';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import TemplatesNavigator from '@/components/TemplatesNavigator';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useVariables } from '@/hooks/variables';
import Combinations from '@/components/Combinations';
import Variables from '@/modules/Dashboard/Variables';

interface HeadlineTemplatesI {
	id: string;
	formula: string;
	formulaRaw: string;
	variables: number[];
	premium: boolean;
}

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

export default function Home() {
  const router = useRouter();

  // Dropdowns
  const [currentTemplates, setCurrentTemplates] = useState('Headline');
  const [currentProject, setCurrentProject] = useState('Corbik');

  const [showTemplateNavigation, setShowTemplateNavigation] = useState(false);
  const [showProjectNavigation, setShowProjectNavigation] = useState(false);

  // Modals
  const [showSettings, setShowSettings] = useState(false);
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [showCombinations, setShowCombinations] = useState(true);

  const {variables} = useVariables();

  const [selectedVariable, setSelectedVariable] = useState('desejo');
  const [selectedTemplate, setSelectedTemplate] = useState(HeadlineTemplates[1]);
  const [shownTemplates, setShownTemplates] = useState<HeadlineTemplatesI[]>(HeadlineTemplates);

  const formRef = useRef();

  useEffect(() => {
    console.log(router.query);
    const params = router.query;
    if (params.selectedType) {
      setCurrentTemplates(params.selectedType);
    }
  }, [router]);
  
  const handleTemplateNavigation = useCallback(() => {
    if (showTemplateNavigation === true) {
      return;
    }

    setShowTemplateNavigation(true);
    return;
  }, [showTemplateNavigation]);
  
  const handleProjectNavigation = useCallback(() => {
    if (showProjectNavigation === true) {
      return;
    }
    setShowProjectNavigation(true);
    return;
  }, [showProjectNavigation]);

  return (
    <>
    <AnimatePresence>
    {showCombinations && 
    <Combinations 
      setState={setShowCombinations}
      template={selectedTemplate}
    />}
    </AnimatePresence>
    <Container>
      <TemplatesWrapper isSelected={showTemplateNavigation}>
        <div>
          <h1 onClick={handleTemplateNavigation}>{currentTemplates}</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
        <AnimatePresence>
        {showTemplateNavigation && 
          <TemplatesNavigator setVisibility={setShowTemplateNavigation} current={currentTemplates} setState={setCurrentTemplates} />
        }
        </AnimatePresence>
        <div id="templates--container">
        <Form ref={formRef} onSubmit={() => {}}>
          {shownTemplates.map((item) => (
            <TemplateContainer
              key={item.id}
              name={item.id}
              placeholder={item.formula}
              format={item.formula}
              variables={item.variables}
              variablesInput={variables}
              setSelectedTemplate={setSelectedTemplate}
              setCombinations={setShowCombinations}
              item={item}
            />
          ))}
        </Form>
        </div>
      </TemplatesWrapper>
      <Variables variables={variables} selectedVariable={selectedVariable} setSelectedVariable={setSelectedVariable} />
    </Container>
    </>
  );
}
