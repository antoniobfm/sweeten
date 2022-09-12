import React, {
	createContext,
	useCallback,
	useState,
	useContext,
} from 'react';

import Variables from '@/data/variables';
import { AnimationControls } from 'framer-motion';

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

interface IRemoveVariables {
	index: number;
	contentIndex: number;
	interactionAnimation: AnimationControls;
}

interface IInputChange {
	index: number;
	contentIndex: number;
	value: string;
}

interface VariablesContextData {
	variables: IVariable[];
	onInputChange(data: IInputChange): void;
	removeVariable(data: IRemoveVariables): void;
	addVariable(index: number): void;
}

const VariablesContext = createContext<VariablesContextData>({} as VariablesContextData);

const VariablesProvider: React.FC = ({ children }) => {
	const [data, setData] = useState<IVariable[]>(Variables);

	const onInputChange = useCallback(({index, contentIndex, value}: IInputChange) => {
		let newArray = [...data];
		newArray[index].content[contentIndex] = value;
		setData(newArray);
	}, [data]);

	const removeVariable = useCallback(({ index, contentIndex, interactionAnimation }: IRemoveVariables) => {
		let newContent = [...data];

		if (newContent[index].content.length > 1) {
			newContent[index].content.splice(contentIndex, 1);
		} else {
			interactionAnimation.start({
				// borderColor: ["#fff", '#222425'],
				y: [0, 14, -14, 14, 0],
				transition: { duration: 0.3, type: 'spring', stiffness: 100},
			});
			newContent[index].content[contentIndex] = '';
		}

		setData(newContent);
	}, [data]);

	const addVariable = useCallback((index) => {
		let newContent = [...data];
		newContent[index].content.push('');
		setData(newContent);
	}, [data]);

	return (
		<VariablesContext.Provider
			value={{ 
				variables: data,
				onInputChange,
				removeVariable, 
				addVariable
			}}
		>
			{children}
		</VariablesContext.Provider>
	);
};

function useVariables(): VariablesContextData {
	const context = useContext(VariablesContext);

	if (!context) {
		throw new Error('useVariables must be used within an VariablesProvider');
	}

	return context;
}

export { VariablesContext, VariablesProvider, useVariables };