
import ief from '../../assets/images/logo/ief.png';
import vale from '../../assets/images/logo/vale-branca.png';
import ufsj from '../../assets/images/logo/ufsj.png';
import faped from '../../assets/images/logo/faped.png';
import styles from './Footer.module.css'; // Importa o CSS

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
      <a href="https://www.ief.mg.gov.br/" target="_blank" rel="noopener noreferrer">
  <img src={ief} alt="Logo da ief" className={styles.ief} />
</a>
<a href="https://www.vale.com/pt/home" target="_blank" rel="noopener noreferrer">
<img src={vale} alt="Logo da vale branca" className={styles.vale} />
</a>
<a href="https://www.ufsj.edu.br/" target="_blank" rel="noopener noreferrer">
<img src={ufsj} alt="Logo da UFSJ" className={styles.ufsj} />
</a>
<a href="https://faped.org.br/" target="_blank" rel="noopener noreferrer">
        <img src={faped} alt="Logo da FAPED" className={styles.faped} />
        </a>
      </div>
    </footer>
  );
};

export default Footer; 





