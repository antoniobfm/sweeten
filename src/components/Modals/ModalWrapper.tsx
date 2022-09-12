/* eslint-disable camelcase */
import { ModalContainer, ModalContent } from "./styles";
import React, {
	useEffect,
	useRef,
	useState,
} from "react";

interface ConfirmActionFormData {
	identifier: string;
}

interface IModalWrapper {
	title: string;
	setState: any;
	handleConfirmation: any;
	buttonTextConfirmation?: string;
	buttonTextCancel?: string;
	children: React.ReactNode | undefined;
}

const ModalWrapper: React.FC<IModalWrapper> = ({
	title,
	setState,
	handleConfirmation,
	buttonTextConfirmation,
	buttonTextCancel,
	children,
}: IModalWrapper) => {
  const node = useRef<HTMLDivElement>();

  const [open, setOpen] = useState(true);

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      console.log("clicking inside");
      return;
    }
    // outside click
    setState(false);
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

	return (
		<ModalContainer>
			<div id="settings" ref={node}>
				<ModalContent>
					<h1>{title}</h1>
					{children}
					<div>
						{buttonTextCancel && 
						<button
							type="button"
							className="back"
							onClick={() => setState(false)}
						>
							{buttonTextCancel}
						</button>
						}
						{buttonTextConfirmation && 
						<button
							type="button"
							className="confirm"
							onClick={() => handleConfirmation(false)}
						>
							{buttonTextConfirmation}
						</button>
						}
					</div>
				</ModalContent>
			</div>
		</ModalContainer>
	);
};

export default ModalWrapper;
