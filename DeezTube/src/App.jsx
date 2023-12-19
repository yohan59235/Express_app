import './App.css'

import Top from './components/Top'
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
      <Top />
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
