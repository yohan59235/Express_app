import styles from "../styles/Footer.module.css"

function Footer() {
  return (
    <section>
    <img className={styles.snow} src="src/assets/snow.gif" alt="" />
    <img className={styles.snow2} src="src/assets/snow.gif" alt="" />
        <div className={styles.footer}>
            <h4>Un peu de nous</h4>
            <div className={styles.footerlinks}>
                <div className={styles.description}>
                    <p>Le site à été créé par des passionnés de musiques et de vidéos de Noël. <br /> N'hésitez pas à venir nous suivre sur nos autres platesformes</p>
                    <div className={styles.links}>
                        <img src="src/assets/facebook.png" alt="" />
                        <img src="src/assets/twitter.png" alt="" />
                        <img src="src/assets/insta.png" alt="" />
                    </div>
                </div>

                <div>
                    <h5>Qui sommes nous</h5>
                        <p>Cécile Dorange</p>
                        <p>Mansour Zakreev</p>
                        <p>Yohan Collinse</p>
                </div>

                <div>
                    <h5>Contact</h5>
                        <p>Un problème ?</p>
                        <p>Signalez</p>
                        <p>Notre F.A.Q</p>
                </div>

                <div>
                    <h5>Autres</h5>
                        <p>Politique de<br /> confidentialité</p>
                </div>
            </div>
        
            <div className={styles.copyright}>
                <p><img className={styles.footerLogo} src="/src/assets/copyright.png" alt="" /> Tous droits réservés à ceux qui aiment Noël</p>
            </div>

        </div>
    </section>
  )
}

export default Footer