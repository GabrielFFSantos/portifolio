import Head from "next/head";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin, faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div id="Background">
      <Head>
        <title>Gabriel Filipe</title>
        <meta
          name="description"
          content="Portifólio de Gabriel Filipe Ferreira"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <ul> Sobre Mim </ul>
          <ul> Contato </ul>
        </nav>
        <div id="ProfileImage" />
        <h1 id="WelcomeTitle">
          Olá sou Gabriel Filipe, Bem vindo ao meu portifólio!
        </h1>
      </header>
      <body>
        <div id="PresentationBox">
          <h2>Conhecimento em ////</h2>
        </div>
        <div id="CarroselBody">
          <div className="card">
            <h3 className="title">Javascript</h3>
            <div id="Postgress" />
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
          </div>
          <div className="card">
            <h3 className="title"> React</h3>
            <div id="Postgress" />
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
          </div>
          <div className="card">
            <h3 className="title">Next js</h3>
            <div id="Postgress" />
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
          </div>
          <div className="card">
            <h3 className="title">Typescript</h3>
            <div id="Postgress" />
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
          </div>
          <div className="card">
            <h3 className="title">Postgress</h3>
            <div id="Postgress" />
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
          </div>
        </div>
      </body>
      <footer>
        <p><FontAwesomeIcon icon={faSquareWhatsapp} id="icons"/>WhatsApp:(31) 9 7507-5631</p>
        <a href="https://github.com/GabrielFFSantos"><FontAwesomeIcon icon={faSquareGithub} id="icons"/>GitHub</a>
        <a href="https://www.linkedin.com/in/gabrielffs/"><FontAwesomeIcon icon={faLinkedin} id="icons"/>LinkedIn</a>
      </footer>
    </div>
  );
}
