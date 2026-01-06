import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from "../../assets/logo/logo-RPA.png";
import { TiHome } from "react-icons/ti";
import { Link, NavLink } from 'react-router-dom';



const Navbar  = () => {
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
        <li><NavLink to="/home" className={({ isActive }) => (isActive ? styles.activeLink : undefined)}>Home</NavLink> </li>
          <li><NavLink to="/implementacao" className={({ isActive }) => (isActive ? styles.activeLink : undefined)}>Implementação</NavLink></li>
          
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
