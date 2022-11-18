import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSquareGithub,
	faLinkedin,
	faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Home.module.css";

const Home = () => {
	return (
		<div className={styles.Background}>
			<Head>
				<title>Gabriel Filipe</title>
				<meta
					name="description"
					content="Portifólio de Gabriel Filipe Ferreira"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.body}>
				<div className={styles.header}>
					<div className={styles.nav}>
						<div className={styles.ul}> Sobre Mim </div>
						<div className={styles.ul}> Contato </div>
					</div>
					<div className={styles.ProfileImage} />
					<h1 className={styles.WelcomeTitle}>
						Olá sou Gabriel Filipe, Bem vindo ao meu portifólio!
					</h1>
				</div>
				<div className={styles.PresentationBox}>
					<h2>Conhecimento em ////</h2>
				</div>
				<div className={styles.CarroselBody}>
					<div className={styles.card}>
						<h3 className={styles.title}>Javascript</h3>
						<div className={styles.Postgress} />
						<div className={styles.bar}>
							<div className={styles.emptybar}></div>
							<div className={styles.filledbar}></div>
						</div>
					</div>
					<div className={styles.card}>
						<h3 className={styles.title}>React</h3>
						<div className={styles.Postgress} />
						<div className={styles.bar}>
							<div className={styles.emptybar}></div>
							<div className={styles.filledbar}></div>
						</div>
					</div>
					<div className={styles.card}>
						<h3 className={styles.title}>Next Js</h3>
						<div className={styles.Postgress} />
						<div className={styles.bar}>
							<div className={styles.emptybar}></div>
							<div className={styles.filledbar}></div>
						</div>
					</div>
					<div className={styles.card}>
						<h3 className={styles.title}>Typescript</h3>
						<div className={styles.Postgress} />
						<div className={styles.bar}>
							<div className={styles.emptybar}></div>
							<div className={styles.filledbar}></div>
						</div>
					</div>
					<div className={styles.card}>
						<h3 className={styles.title}>Postgress</h3>
						<div className={styles.Postgress} />
						<div className={styles.bar}>
							<div className={styles.emptybar}></div>
							<div className={styles.filledbar}></div>
						</div>
					</div>
				</div>
				<div className={styles.footer}>
					<FontAwesomeIcon
						className={styles.icons}
						icon={faSquareWhatsapp}
						id="icons"
					/>
					<a
						className={styles.footerA}
						href="https://whatsa.me/5531975075631/?t=Ol%C3%A1,%20vim%20pelo%20seu%20portif%C3%B3lio.">
						WhatsApp:(31) 9 7507-5631
					</a>
					<FontAwesomeIcon
						className={styles.icons}
						icon={faSquareGithub}
						id="icons"
					/>
					<a
						className={styles.footerA}
						href="https://github.com/GabrielFFSantos">
						GitHub
					</a>
					<FontAwesomeIcon
						className={styles.icons}
						icon={faLinkedin}
						id="icons"
					/>
					<a
						className={styles.footerA}
						href="https://www.linkedin.com/in/gabrielffs/">
						LinkedIn
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
