import './App.css'

import musicList from './assets/Data/musicList'
import MusicItems from './assets/components/MusicItems'
import style from "./assets/styles/MusicCard.module.css"

import { useState } from 'react'

function App() {

  return (
    <>
    <div className={style.MusicItems}>
      <MusicItems musicList={musicList} />
    </div>
      
    </>
  )
}

export default App
