import styles from "../styles/Header.module.css"

function Header () {


    return(
        <div className={styles.header}>
            <img className={styles.logo} src="src/assets/titre.png" />
            <h1>Ecoutez et regardez vos musiques et vidéos préférées</h1>
            <div className={styles.icons}>
                <img className={styles.notif} src="src/assets/notifications.png" alt="" />
                <img className={styles.user} src="src/assets/user.png" alt="" />
            </div>
        </div>
    )
}


export default Header