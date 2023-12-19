import './App.css'

import Top from './components/Top'
import musicList from './assets/Data/musicList'
import videoList from './assets/Data/videoList'
import MusicItems from './components/MusicItems'
import VideoCard from './components/VideoCard'
import Header from "./components/Header"
import Footer from "./components/Footer"

import styles from "./styles/MusicCard.module.css"
import { useState } from 'react'

function App() {

  const [currentPage, setCurrentPage]=useState(0)

  const trueTopMusic=musicList.filter(item => item.top === true);

  return (

    <>
      <Header />

      <main>
        <Top trueTopMusic={trueTopMusic[currentPage]} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <h1>Vos musiques</h1>
        <div className={styles.MusicItems}>
        <MusicItems musicList={musicList} />
        </div>
        <h1>Vos vidéos</h1>
        <div>
        <VideoCard videoList={videoList} />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
