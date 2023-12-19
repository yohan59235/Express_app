import './App.css'

import musicList from './assets/Data/musicList'
import videoList from './assets/Data/videoList'
import MusicItems from './components/MusicItems'
import VideoCard from './components/VideoCard'
import Header from "./components/Header"
import Footer from "./components/Footer"

import style from "./styles/MusicCard.module.css"


function App() {

  return (
    <>
      <Header />

      <main>
        <div className={style.MusicItems}>
        <MusicItems musicList={musicList} />
        </div>
        <div>
        <VideoCard videoList={videoList} />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
