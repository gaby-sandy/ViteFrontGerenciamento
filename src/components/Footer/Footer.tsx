
import ief from '../../assets/images/logo/ief.png';
import vale from '../../assets/images/logo/vale-branca.png';
import ufsj from '../../assets/images/logo/ufsj.png';
import faped from '../../assets/images/logo/faped.png';
import styles from './Footer.module.css'; // Importa o CSS

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <img src={ief} alt="Logo da ief" className={styles.ief} />
        <img src={vale} alt="Logo da vale branca" className={styles.vale} />
        <img src={ufsj} alt="Logo da UFSJ" className={styles.ufsj} />
        <img src={faped} alt="Logo da FAPED" className={styles.faped} />
      </div>
    </footer>
  );
};

export default Footer; 