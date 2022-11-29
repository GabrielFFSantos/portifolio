import { FaReact } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiPostgresql } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import styles from "styles/cards.module.css";
import useModal from "../../../interfaces/useModal";
import Modal from "../modal/index";
import ModalForms from "../../../interfaces/modalForms";

const Cards = () => {
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
      <div className={styles.carroselbody}>
        <div className={styles.card} onClick={toggle}>
          <h3 className={styles.title}>Javascript</h3>
          <SiJavascript className={styles.cardIcon} />
        </div>
        <div className={styles.card} onClick={toggle}>
          <h3 className={styles.title}>React</h3>
          <FaReact className={styles.cardIcon} />
        </div>
        <div className={styles.card} onClick={toggle}>
          <h3 className={styles.title}>Next Js</h3>
          <TbBrandNextjs className={styles.cardIcon} />
        </div>
        <div className={styles.card} onClick={toggle}>
          <h3 className={styles.title}>Typescript</h3>
          <SiTypescript className={styles.cardIcon} />
        </div>
        <div className={styles.card} onClick={toggle}>
          <h3 className={styles.title}>Postgress</h3>
          <SiPostgresql className={styles.cardIcon} />
        </div>
      </div>
    </>
  );
};

export default Cards;
