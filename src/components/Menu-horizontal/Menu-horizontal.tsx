import styles from './Menupag.module.css';
import Link from 'next/link';

export default function MenuHorizontal() {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Gerenciamento - PRA MG</h1>
        <nav className={styles.navTabs}>
          <ul className={styles.tabList}>
            <li><Link href='./aprovacao'>Aprovação</Link></li>
            <li><Link href='./priorizacao'>Priorização</Link></li>
            <li><Link href='/verificacao'>Verificação</Link></li>
            <li><Link href='/avaliacao'>Avaliação</Link></li>
            <li><Link href='../../inteligencia-de-dados'>Inteligência de dados</Link></li>
          </ul>
        </nav>
        
      </div>
      <div className={styles.divider}></div>
    </div>
    
  );
}