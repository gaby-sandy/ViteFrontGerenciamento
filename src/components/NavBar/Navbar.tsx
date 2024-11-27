import styles from './NavBar.module.css';
import Logo from '../../assets/images/logo/Logo florescer.png';
import { TiHome } from "react-icons/ti";
import { IoMenu } from "react-icons/io5";

export default function NavBar() {
  return( 
      <div className={styles.container}>
          <img src={Logo} alt='Logo do Florece' style={{width:'130px', marginLeft:'15px'}} />

          <div className={styles.rightItems}>
              <p className={styles.username}>Nome de usuário</p>
              <TiHome size={25} className={styles.home} />
              <IoMenu size={34} className={styles.menu} />
          </div>
      </div>
  );
}
