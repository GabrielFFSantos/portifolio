import styled from "styled-components";

export const Wrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 700;
	width: inherit;
	outline: 0;
`;

export const Backdrop = styled.div`
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

export const StyledModal = styled.div`
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

export const Header = styled.div`
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	width: 100%;
	height: 30px;
	background: rgb(9, 9, 121);
	display: flex;
	align-items: center;
`;

export const Content = styled.div`
	display: flex;
	font-size: 15px;
	font-family: Georgia, "Times New Roman", Times, serif;
	background-color: #fff;
	padding: 20px;
`;

export const ButtonModal = styled.div`
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

export const FooterModal = styled.div`
	text-align: right;
	padding: 15px;
	background-color: #fff;
`;

export const ModalSection = styled.div`
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
	max-width: calc(600px + 1vw);
	justify-content: center;
	div {
		display: grid;
		grid-template-columns: 1fr;
	}
	input {
		font-family: Georgia, "Times New Roman", Times, serif;
		padding: 5px;
		border: 1px solid black;
		background-color: #f8f6f4;
	}
	label {
		color: black;
	}
`;

export const PlaceholderImg = styled.div`
	background-image: url(/assets/image.png);
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	width: 400px;
	height: 200px;
`;
