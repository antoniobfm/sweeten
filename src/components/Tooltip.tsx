import React from 'react';

import { Container } from "@/styles/components/Tooltip";

interface TooltipProps {
	title: string;
	className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ title, className, children }) => {
	return (
		<Container className={className}>
			{children}
      <span>
        {title}
        <div className="triangle"/>
      </span>
		</Container>
	);
};

export default Tooltip;
