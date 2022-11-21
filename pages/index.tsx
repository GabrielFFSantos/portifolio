import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSquareGithub,
	faLinkedin,
	faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Home.module.css";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiPostgresql } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Modal from "./components/modal";
import useModal from "../interfaces/useModal";
import ModalForms from "./components/modal/modalForms";

const Home = () => {
	const { isShown, toggle } = useModal();
	const content = ModalForms();

	return (
		<>
			<Modal
				isShown={isShown}
				hide={toggle}
				modalContent={content}
				modalTitle={""}
			/>
			<Head>
				<title>Gabriel Filipe</title>
				<meta
					name="description"
					content="Portifólio de Gabriel Filipe Ferreira"
				/>
				<link rel="icon" href="/earth-sharp.svg" />
			</Head>
			<div className={styles.header}>
				<div className={styles.nav}>
					<a href="#welcome_title" className={styles.ul}>
						{" "}
						Sobre Mim{" "}
					</a>
					<a href="#footer" className={styles.ul}>
						{" "}
						Contato{" "}
					</a>
				</div>
			</div>
			<div className={styles.background}>
				<div className={styles.presentationbox}>
					<div className={styles.summary}>
						<h1 id="welcome_title" className={styles.welcometitle}>
							Seja Bem vindo ao meu portifólio!
						</h1>
						Este é um resumo sobre minha trajetória como desenvolvedor,
						atualmente possuo conhecimento em Html, Css, Javascript e alguns
						frameworks como React e NextJs, estou sempre em busca de novos
						conhecimentos e desafios para aprimorar minhas habilidades e no
						botão abaixo você pode ver um pouco sobre os projetos pessoais que
						venho desenvolvendo.
					</div>
					<div className={styles.profileimage} />
				</div>
				<div className={styles.carroselbody}>
					<div className={styles.card} onClick={toggle}>
						<h3 className={styles.title}>Javascript</h3>
						<SiJavascript className={styles.cardIcon} />
						<div className={styles.bar}>
							<div className={styles.emptybar}></div>
							<div className={styles.filledbar}></div>
						</div>
					</div>
					<div className={styles.card} onClick={toggle}>
						<h3 className={styles.title}>React</h3>
						<FaReact className={styles.cardIcon} />
						<div className={styles.bar}>
							<div className={styles.emptybar}></div>
							<div className={styles.filledbar}></div>
						</div>
					</div>
					<div className={styles.card} onClick={toggle}>
						<h3 className={styles.title}>Next Js</h3>
						<TbBrandNextjs className={styles.cardIcon} />
						<div className={styles.bar}>
							<div className={styles.emptybar}></div>
							<div className={styles.filledbar}></div>
						</div>
					</div>
					<div className={styles.card} onClick={toggle}>
						<h3 className={styles.title}>Typescript</h3>
						<SiTypescript className={styles.cardIcon} />
						<div className={styles.bar}>
							<div className={styles.emptybar}></div>
							<div className={styles.filledbar}></div>
						</div>
					</div>
					<div className={styles.card} onClick={toggle}>
						<h3 className={styles.title}>Postgress</h3>
						<SiPostgresql className={styles.cardIcon} />
						<div className={styles.bar}>
							<div className={styles.emptybar}></div>
							<div className={styles.filledbar}></div>
						</div>
					</div>
				</div>
			</div>
			<div id="footer" className={styles.footer}>
				<FontAwesomeIcon
					className={styles.icons}
					icon={faSquareWhatsapp}
					id="icons"
				/>
				<a
					className={styles.footera}
					href="https://whatsa.me/5531975075631/?t=Ol%C3%A1,%20vim%20pelo%20seu%20portif%C3%B3lio.">
					WhatsApp:(31) 9 7507-5631
				</a>
				<FontAwesomeIcon
					className={styles.icons}
					icon={faSquareGithub}
					id="icons"
				/>
				<a className={styles.footera} href="https://github.com/GabrielFFSantos">
					GitHub
				</a>
				<FontAwesomeIcon
					className={styles.icons}
					icon={faLinkedin}
					id="icons"
				/>
				<a
					className={styles.footera}
					href="https://www.linkedin.com/in/gabrielffs/">
					LinkedIn
				</a>
			</div>
		</>
	);
};

export default Home;
