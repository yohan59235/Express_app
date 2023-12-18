import styles from "../styles/Footer.module.css"

function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.description}>
            <h4>Un peu de nous</h4>
            <p>Le site à été créé par des passionnés de musiques et de vidéos de Noël. <br /> N'hésitez pas à venir nous suivre sur nos autres platesformes</p>
            <div>
                <img src="src/assets/facebook.png" alt="" />
                <img src="src/assets/twitter.png" alt="" />
                <img src="src/assets/insta.png" alt="" />
            </div>
        </div>

        <div>
            <h5>Qui sommes nous</h5>
                <p></p>
                <p></p>
                <p></p>
        </div>

        <div>
            <h5>Contact</h5>
                <p>Un problème ?</p>
                <p>Signalez</p>
                <p>Notre F.A.Q</p>
        </div>

        <div>
            <h5>Autres</h5>
                <p>Politique de confidentialité</p>
        </div>
        
        <div>
            <p><img className={styles.footerLogo} src="/src/assets/copyright.png" alt="" /> Tous droits réservés à ceux qui aiment Noël</p>
        </div>



    </div>
  )
}

export default Footer