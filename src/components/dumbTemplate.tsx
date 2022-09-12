/* eslint-disable consistent-return */
import React, {
	InputHTMLAttributes,
	useEffect,
	useRef,
	useState,
	useCallback,
} from 'react';
import { useField } from '@unform/core';
import parse, { domToReact } from 'html-react-parser';

import { MdContentCopy } from 'react-icons/md';
import { Container, TemplateButtonsContainer } from '@/styles/components/Template';
import { useToast } from '@/hooks/toast';
import { useVariables } from '@/hooks/variables';

interface VariablesInputT {
	index: number;
	content: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	variables: number[];
	variablesInput: VariablesInputT[];
  format: string;
}

interface VariablesFieldProps {
	variablesInput: VariablesInputT[];
	index: string;
}

const VariablesField: React.FC<VariablesFieldProps> = ({
	variablesInput,
	index,
}) => {
	const {variables} = useVariables();
  let currentIndex = 0;
  variablesInput.map((v, index2) => {
    if (v.index === parseInt(index, 10)) {
      currentIndex = index2;
    }
  })
	if (
		variablesInput &&
		variablesInput[currentIndex].content &&
		variablesInput[currentIndex].content.length >= 1
	) {
		return (
			<strong>
				<i>{variablesInput[currentIndex].content}</i>
			</strong>
		);
	}

	return (
		<strong>
			<i>
				{variables[index].defaultContent}
			</i>
		</strong>
	);
};

const TemplateContainer: React.FC<InputProps> = ({
	name,
	variables,
	variablesInput,
	format,
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
			</TemplateButtonsContainer>
		</Container>
	);
};
export default TemplateContainer;
