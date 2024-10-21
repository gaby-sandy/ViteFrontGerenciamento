import React from 'react';
import ief from '../../assets/logo/ief.png';
import vale from '../../assets/logo/vale-branca.png';
import ufsj from '../../assets/logo/ufsj.png';
import faped from '../../assets/logo/faped.png';
import styles from './Footer.module.css'; // Importa o CSS

const Footer: React.FC = () => {
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
