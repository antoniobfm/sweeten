/* eslint-disable consistent-return */
import React, {
	InputHTMLAttributes,
	useEffect,
	useRef,
	useState,
	useCallback,
	SetStateAction,
	Dispatch,
} from 'react';
import { useField } from '@unform/core';
import parse, { domToReact } from 'html-react-parser';

import { MdContentCopy } from 'react-icons/md';
import { IoMdExpand } from 'react-icons/io';
import { Container, TemplateButtonsContainer } from '@/styles/components/Template';
import { useToast } from '@/hooks/toast';

interface VariablesInputT {
	index: number;
	id: string;
	title: string;
	premium: boolean;
	content: string[];
	showOnFilter: boolean;
}
interface HeadlineTemplatesI {
	id: string;
	formula: string;
	formulaRaw: string;
	variables: number[];
	premium: boolean;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	variables: number[];
	variablesInput: VariablesInputT[];
	format: string;
	setSelectedTemplate: Dispatch<SetStateAction<HeadlineTemplatesI>>;
	item: HeadlineTemplatesI;
	setCombinations: Dispatch<SetStateAction<boolean>>;
}

interface VariablesFieldProps {
	variablesInput: VariablesInputT[];
	index: string;
}

const VariablesField: React.FC<VariablesFieldProps> = ({
	variablesInput,
	index,
}) => {
	if (
		variablesInput &&
		variablesInput[parseInt(index, 10)].content[0] &&
		variablesInput[parseInt(index, 10)].content[0].length >= 1
	) {
		return (
			<strong>
				<i>{variablesInput[parseInt(index, 10)].content[0]}</i>
			</strong>
		);
	}

	return (
		<strong>
			<i>
				{'{'}
				{variablesInput[parseInt(index, 10)].title}
				{'}'}
			</i>
		</strong>
	);
};

const TemplateContainer: React.FC<InputProps> = ({
	name,
	variables,
	variablesInput,
	format,
	setSelectedTemplate,
	setCombinations,
	item,
	...rest
}) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const { fieldName, defaultValue, error, registerField } = useField(name);
	const [isFocused, setIsFocused] = useState(false);
	const [isFilled, setIsFilled] = useState(false);
	const [teste, setTeste] = useState(format.replace(/<[^>]*>?/gm, ''));

	const [valuezin, setValuezin] = useState(format);

	const { addToast } = useToast();

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: 'value',
		});
	}, [fieldName, registerField]);

	const handleInputFocus = useCallback(
		(e) => {
			setIsFocused(isFocused !== true);
			setIsFilled(!!inputRef.current?.value);
			e.preventDefault();
		},
		[isFocused],
	);

	useEffect(() => {
		setTeste(format.replace(/<[^>]*>?/gm, ''));
	}, [format]);

	// const handleInputBlur = useCallback(() => {
	// 	setIsFocused(false);

	// 	setIsFilled(!!inputRef.current?.value);
	// }, []);

	const handleCopy = useCallback(() => {
		/* Get the text field */
		const copyText = document.getElementById(name) as HTMLParagraphElement;

		setValuezin(copyText.innerHTML);

		const textField = document.createElement('textarea');
		textField.innerText = copyText.innerHTML.replace(/<[^>]*>?/gm, '');
		document.body.appendChild(textField);
		textField.select();
		document.execCommand('copy');
		textField.remove();
		addToast({
			type: "success",
			title: 'Copy copiada!'
		})
	}, [name]);


	const options = {
		replace: ({ attribs, children }: any) => {
			if (!attribs) return;

			if (attribs.id === 'main') {
				return (
					<VariablesField index={attribs.class} variablesInput={variablesInput}>
						{domToReact(children, options)}
					</VariablesField>
				);
			}

			if (attribs.class === 'prettify') {
				return (
					<span style={{ color: 'hotpink' }}>
						{domToReact(children, options)}
					</span>
				);
			}
		},
	};
	
	return (
		<Container isErrored={!!error} isFilled={isFilled}>
			<input
				ref={inputRef}
				hidden
				defaultValue={teste}
				{...rest}
			/>
			<p id={name}>{parse(format, options)}</p>
			<TemplateButtonsContainer>
				<button type="button" onClick={handleCopy}>
					<MdContentCopy size={14} />
				</button>
				<button type="button" onClick={() => {setSelectedTemplate(item); setCombinations(true);}}>
					<IoMdExpand size={14} />
				</button>
			</TemplateButtonsContainer>
		</Container>
	);
};
export default TemplateContainer;
