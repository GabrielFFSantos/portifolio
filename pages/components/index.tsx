import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

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

const Wrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 700;
	width: inherit;
	outline: 0;
`;

const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.3);
	opacity: 50%;
	z-index: 500;
	display: block;
`;

const StyledModal = styled.div`
	z-index: 100;
	background-color: #f8f6f4;
	position: relative;
	margin: auto;
	border-radius: 8px;
	max-height: 90vh;
	text-align: left;
	border-radius: 4px;

	@media (max-width: 800px) {
		width: 90%;
		overflow: auto;
	}
`;

const Header = styled.div`
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	width: 100%;
	height: 30px;
	background: rgb(9, 9, 121);
	display: flex;
	align-items: center;
`;

const Content = styled.div`
	display: flex;
	font-size: 15px;
	font-family: Georgia, "Times New Roman", Times, serif;
	background-color: #fff;
	padding: 20px;
`;

const ButtonModal = styled.div`
	background: rgb(9, 9, 121);
	border: none;
	color: aliceblue;
	padding: 5px 10px;
	text-align: center;
	font-size: 15px;
	margin: 4px 2px;
	border-radius: 5px;
	display: inline-block;
	text-decoration: none;
	cursor: pointer;
`;

const FooterModal = styled.div`
	text-align: right;
	padding: 15px;
	background-color: #fff;
`;

export default Modal;
