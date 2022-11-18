import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import {
	Wrapper,
	Header,
	StyledModal,
	Content,
	Backdrop,
	ButtonModal,
	FooterModal,
} from "./modal.style";

export interface ModalProps {
	isShown: boolean;
	hide: () => void;
	modalContent: JSX.Element;
	modalTitle: string;
}

const Modal: FunctionComponent<ModalProps> = ({
	isShown,
	hide,
	modalContent,
	modalTitle,
}) => {
	const modal = (
		<React.Fragment>
			<Backdrop />
			<Wrapper>
				<StyledModal>
					<Header>{modalTitle}</Header>
					<Content>{modalContent}</Content>
					<FooterModal>
						<ButtonModal onClick={hide}> FECHAR </ButtonModal>
					</FooterModal>
				</StyledModal>
			</Wrapper>
		</React.Fragment>
	);

	return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal;
