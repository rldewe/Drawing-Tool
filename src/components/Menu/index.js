
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPencil,faEraser,faRotateLeft,faRotateRight,faDownload,faLink} from '@fortawesome/free-solid-svg-icons'
import styles from './index.module.css'

const Menu =()=>{
    return (
       <div className={styles.rowContainer}>
         <div className={styles.menuContainer}>{/* menu wrapper*/}
            <div className={styles.iconWrapper}>{/* icon wrapper*/}
                <FontAwesomeIcon icon={faPencil} className={styles.icon}/>
            </div>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faEraser} className={styles.icon}/>
            </div>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faRotateLeft} className={styles.icon}/>
            </div>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faRotateRight} className={styles.icon}/>
            </div>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faDownload} className={styles.icon}/>
            </div>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faLink} className={styles.icon}/>
            </div>
        </div>
       </div>
    )
}

export default Menu;