import styled from "styled-components";

const ModalForms = () => {
	return (
		<ModalSection>
			<PlaceholderImg />
		</ModalSection>
	);
};

const PlaceholderImg = styled.div`
	background-image: url(/assets/image.png);
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	width: 400px;
	height: 200px;
`;

const ModalSection = styled.div`
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

export default ModalForms;
