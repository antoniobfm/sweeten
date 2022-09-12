import React from 'react';

import { ToastProvider } from './toast';
import { VariablesProvider } from './variables';

const AppProvider: React.FC = ({ children }) => {
	return (
			<ToastProvider>
				<VariablesProvider>
					{children}
				</VariablesProvider>
			</ToastProvider>
	);
};

export default AppProvider;
