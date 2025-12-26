import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from "../../assets/logo/logo-RPA.png";
import { TiHome } from "react-icons/ti";
import { Link } from 'react-router-dom';

// Definir a interface para o estado do componente
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // Estado tipado como booleano

  // Função para alternar o menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navbar}>
      <img
        src={logo}
        alt="RPA escrito com ícones de folhas no canto superior direito."
        style={{ width: '60px' }}
      />

      <div className={styles.home}>
        <TiHome size={27} />
      </div>

      <p style={{ position:'sticky', color: "white", marginLeft: 'auto',marginRight:'100px', fontSize: '15px', fontWeight: 600, zIndex: 1000 }}>
        Nome do Usuário
      </p>

      <div className={styles.iconContainer} onClick={toggleMenu}>
        <div className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
      </div>

      <nav className={`${styles.sidebar} ${isMenuOpen ? styles.open : ''}`} >
        <ul>
          <li><a onClick={}>Home</a></li>
          <li><a>Sobre</a></li>
          <li><a>Serviços</a></li>
          <li><a>Contato</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
