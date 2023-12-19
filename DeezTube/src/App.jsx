import './App.css'

import Top from './components/Top'
import musicList from './assets/Data/musicList'
import videoList from './assets/Data/videoList'
import MusicItems from './components/MusicItems'
import VideoCard from './components/VideoCard'
import Header from "./components/Header"
import Footer from "./components/Footer"
import styles from "./styles/MusicCard.module.css"


function App() {

  return (

    <>
      <Header />

      <main>
        <Top className={styles.Top}/>
        <div className={styles.MusicItems}>
        <MusicItems musicList={musicList} /> 
        </div>
        <div className="videoTitle"><h1>Vos vidéos</h1></div>
        <div className="VideoItems">
        <VideoCard videoList={videoList} />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
