"use client"
import React, { useEffect } from 'react'
import { useState } from 'react';
<link rel="stylesheet" href="Ayah.css" />



const body = () => {
  const [Ayat, setAyat] = useState({
    "data": {
      "numberInSurah": 1,
      "text": "In the name of God, The Most Gracious, The Dispenser of Grace",
      "surah": {

        "englishName": "Al-Fatiha"
      }
    }
  })
  const randomAyahNumber = Math.floor(Math.random() * (6236 - 1 + 1)) + 1;
async function fetchData() {
  try {
    const response = await fetch(`https://api.alquran.cloud/v1/ayah/${randomAyahNumber}/en.asad`);
    const data = await response.json();
    setAyat(data);
  } catch (error) {
    console.error(error);
  }
}
const generateAyah = async () => {

  const apiURL = `https://api.alquran.cloud/v1/ayah/${Math.floor(Math.random() * 6236) + 1}/en.asad`;
  const response = await fetch(apiURL);
  const data = await response.json();
  setAyat(data);

}
  return (
    <div>
        <div className="container">
    <div className="card">
    <div className="h1">
        Quran Verses Generator
    </div>
        <div className="Atext">{Ayat.data.text}</div>
        <div className="Stext">{Ayat.data.surah.englishName} : {Ayat.data.numberInSurah}</div>
        <div className="btn" onClick={generateAyah}><button>Generate</button></div>
    </div>
</div>
      
    </div>
  )
}

export default body

