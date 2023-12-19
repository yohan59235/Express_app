import './App.css'

import Header from './components/Header'
import Top from './components/Top'
import musicList from './assets/Data/musicList'
import MusicItems from './components/MusicItems'
import style from "./styles/MusicCard.module.css"
import Footer from "./components/Footer"

import { useState } from 'react'

function App() {

  return (
      <section>
        <Header />
        <Top />

        <main>
          <div className={style.MusicItems}>
          <MusicItems musicList={musicList} />
          </div>



        </main>



        <Footer />
      </section>
  )
}

export default App
