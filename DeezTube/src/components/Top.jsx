import styles from "../styles/Top.module.css"

function Top({trueTopMusic, currentPage, setCurrentPage}) {

/*const trueTopMusic=musicList.filter(item => item.top === true);*/

const handleNextClick = () => {
  setCurrentPage(currentPage +1)
}
const handleBeforeClick = () => {
  setCurrentPage(currentPage -1)
}

  return (
    <div className={styles.christmas}>
      <h1>Top écoute !</h1>
      
      <figure className={styles.TopChristmas}>
      <div>
          <h2>{trueTopMusic.title}</h2>
          <figcaption>de <em>{trueTopMusic.autor}</em></figcaption>
          </div>
          <div>
          <audio controls src={trueTopMusic.url}>
          <a href={trueTopMusic.url}>Download</a>
          </audio>    
      </div>
      {currentPage > 0 && <button onClick={handleBeforeClick}>Précédent</button>}
      {currentPage < 2 && <button onClick={handleNextClick}>Suivant</button>}
      </figure>
      
    </div>
  )
  }

export default Top

/*<div className={styles.christmas}>
      <h1>Top écoute !</h1>
      {musicList.map((song, index)=>
      <iframe className={styles.merrychristmas}  
      src="https://www.youtube.com/embed/aAkMkVFwAoo?si=UA5VZZsNlwb2YJ7D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
      )}
      
      <button onClick={() => handleNextClick(index)}>suivant</button>
      
       <MusicCard />    
      <img className={styles.Topimg} src="src/assets/mariahCarey.jpg" alt="" />
      <button>suivant</button>*/