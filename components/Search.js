"use client"
import React from 'react'
<link rel="stylesheet" href="Search.css" />
import { useState, useRef} from 'react'
import "./Ayah"

const Search = () => {
    const InRef = useRef()
    const [counter, setCounter] = useState(1)

    // const handleClick = ()=>{
    //   console.log(InRef.current.value)
    //   setCounter(InRef.current.value)
    //   if (parseInt(InRef.current.value) > 0 && parseInt(InRef.current.value) <= 6236){
    //     let a = InRef.current.value
    //     fetchData(a)
    //   }
    //   else{
    //     alert("Please enter an ayah number between 1 and 6236")
    //     InRef.current.value = ''
    //   }
    // }
    const handleClick = () => {
      const inputValue = parseInt(InRef.current.value, 10); // Ensure it's an integer
      if (inputValue > 0 && inputValue <= 6236) {
        setCounter(inputValue); // Set counter to the input value
        fetchData(inputValue);
      } else {
        alert("Please enter an ayah number between 1 and 6236");
        InRef.current.value = "";
      }
    };

    const [Ayat, setAyat] = useState({
        "data": {
          "numberInSurah": 1,
          "text": "In the name of God, The Most Gracious, The Dispenser of Grace",
          "surah": {
            "englishName": "Al-Faatiha"
          }
        }
      })
      async function fetchData(AyatNo) {
        try {
          const response = await fetch(`https://api.alquran.cloud/v1/ayah/${AyatNo}/en.asad`);
          const data = await response.json();
          setAyat(data);
        } catch (error) {
          alert("Error, enter an ayah number between 1 and 6236");
        }
        InRef.current.value = ""
      }
      const handleNext =  ()=>{
      let numberNext = counter + 1
      if (numberNext <= 6236) {
       fetchData(numberNext)
       setCounter(numberNext)
       console.log(counter)
      }
      else{
        alert("Maximuam Ayah number reached")
      }
      }

      const handlePrev = ()=>{
        let numberPrev = counter - 1
        if (numberPrev !== 0) {
       fetchData(numberPrev)
       setCounter(counter-1)
       console.log(counter)
      }
      else{
        alert("Ayah number is at its minimum")
      }
      }

      
  return (
    <div>
       <div>
        <div className="container">
    <div className="card ">
        <div className="line">Search by Ayah</div>
       <div className="data"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
<path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
</svg><input ref={InRef} type="text" placeholder='Enter Ayah Number' /></div>
       <div className="btn"><button onClick={handleClick}>Search</button></div>
       <div className="Result">
       <div><b>Result</b>: <br />{Ayat.data.text}
       <br />
       <div>{Ayat.data.surah.englishName} : {Ayat.data.numberInSurah}</div></div>
       <div className="btn2 buttons"><button onClick={handlePrev}>  &larr; Previous Verse</button><button onClick={handleNext}>Next Verse &rarr;</button></div>

       
       </div>
    </div>
    
</div>
      
    </div>
    </div>
  )
}

export default Search
