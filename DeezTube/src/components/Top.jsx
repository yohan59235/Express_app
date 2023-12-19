import styles from "../styles/Top.module.css"

function Top() {
  return (
    <div className={styles.christmas}>
      <iframe className={styles.merrychristmas}  src="https://www.youtube.com/embed/aAkMkVFwAoo?si=UA5VZZsNlwb2YJ7D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <img className={styles.Topimg} src="src/assets/mariahCarey.jpg" alt="" />
      
    </div>
  )
}

export default Top