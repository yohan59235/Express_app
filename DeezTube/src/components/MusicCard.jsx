import styles from "../styles/MusicCard.module.css"
function MusicCard ({title, autor, url}) {
    return (
        <div>
        <figure className={styles.MusicCard}>
            <div>
            <h2>{title}</h2>
            <figcaption>de <em>{autor}</em></figcaption>
            </div>
            <div>
            <audio controls src={url}>
            <a href={url}>Download</a>
            </audio>    
            </div>
            
        </figure>
        </div>
    )
}

export default MusicCard
