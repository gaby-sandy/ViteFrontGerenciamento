
import styles from './NavBar.module.css'
import Logo from '../../assets/images/logo/logo-RPA.png'
import { TiHome } from "react-icons/ti";
import { IoMenu } from "react-icons/io5";
export default function NavBar(){
    return( 
        <div className={styles.container}>
            <img src={Logo} alt='Logo do Pra' style={{width:'75px', marginLeft:'20px'}}/>

            <p className={styles.username}>Nome de úsuario</p>
            <TiHome size={25}  className={styles.home} /> 
            <IoMenu size={34} className={styles.menu}/>

            

        </div>
    )
}