import React from "react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const Modal: React.FunctionComponent<ModalProps> = (props) => {

	React.useEffect(() => {
		if (props.isOpen) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}
		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, [props.isOpen])


	return (
		<div
			className={`modal-backdrop ${props.isOpen ? "open" : ""}`}
			onClick={props.onClose}
			tabIndex={-1}
			aria-hidden={!props.isOpen}
		>
			<div
				className={`modal-content ${props.isOpen ? "open" : ""}`}
				onClick={(e) => e.stopPropagation()}
				role="dialog"
				aria-modal="true"
			>
				{props.children}
			</div>
		</div>
	);
};

export default Modal;
