import { Container, TemplateOption } from '@/styles/components/TemplatesNavigator';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

interface Props {
  setState: any;
  setVisibility: any;
  current: string;
}

export default function TemplatesNavigator({setState, setVisibility, current}: Props) {
  const router = useRouter();
  const node = useRef<HTMLDivElement>();

  const [open, setOpen] = useState(true);

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      console.log("clicking inside");
      return;
    }
    // outside click
    setVisibility(false);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleTemplateTypeChange = useCallback((type: string) => {
    setState(type);
    setVisibility(false);
    router.push('/?selectedType=' + type);
  }, []);

  return (
    <Container
      initial={{ opacity: 1, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div id="click--area" ref={node}>
        <TemplateOption onClick={() => handleTemplateTypeChange('Headline')} isSelected={current === "Headline"}>Headline</TemplateOption>
        <TemplateOption onClick={() => handleTemplateTypeChange('Email')} isSelected={current === "Email"}>Email</TemplateOption>
        <TemplateOption onClick={() => handleTemplateTypeChange('Face Ads')} isSelected={current === "Face Ads"}>Face Ads</TemplateOption>
        <TemplateOption onClick={() => handleTemplateTypeChange('WhatsApp')} isSelected={current === "WhatsApp"}>WhatsApp</TemplateOption>
        <TemplateOption onClick={() => handleTemplateTypeChange('Google Ads')} isSelected={current === "Google Ads"}>Google Ads</TemplateOption>
        <TemplateOption onClick={() => handleTemplateTypeChange('Semente')} isSelected={current === "Semente"}>Lançamento Semente</TemplateOption>
        <TemplateOption onClick={() => handleTemplateTypeChange('Meteorico')} isSelected={current === "Meteorico"}>Lançamento Meteórico</TemplateOption>
        <TemplateOption onClick={() => handleTemplateTypeChange('Interno')} isSelected={current === "Interno"}>Lançamento Interno</TemplateOption>
      </div>
    </Container>
  );
}
