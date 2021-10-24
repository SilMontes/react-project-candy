
import React, { useEffect } from 'react';
import {useState} from 'react';
const lwidth = 8
const candyColors = [
  "blue",
  "red",
  "yellow",
  "purple",
  "green",
  "orange"
]
function App() {

  const [currentRandomColorArray, setCurrentRandomColorArray] = useState([])

  const createBoard = () => {

    const randomColorArray = []

    for (let i = 0; i < lwidth * lwidth; i++){
      const randomColor = candyColors[Math.floor(Math.random()* candyColors.length)]
      randomColorArray.push(randomColor)
    }
    setCurrentRandomColorArray(randomColorArray)
  }

  useEffect(()=>{
    createBoard()
  },[])
  
  
  return (
    <div className="App">
      <div className="game">
        {currentRandomColorArray.map((candyColor, index) =>(
          <img key={index} style={{backgroundColor:candyColor}} alt={candyColor}/>
        ))}
      </div>
    </div>
  );
}

export default App;
