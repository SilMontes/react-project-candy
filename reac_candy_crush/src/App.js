// npm install
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

  const checkForColumnOfThree = () => {
    for (let i=0; i <= 47; i++){
        const columnOfThree = [i, i + lwidth, i + lwidth *2]
        const currColor = currentRandomColorArray[i]
        if(columnOfThree.every(index => currentRandomColorArray[index] === currColor)){
          columnOfThree.forEach(item => currentRandomColorArray[item] = '')
        }
    }
  }

  const checkForLRowOfThree = () => {
    for (let i=0; i <= 61; i++){
      const rowOfThree = [i,i+1,i+2]
    }
  } 

  const createBoard = () => {

    let randomColorArray = []

    for (let i = 0; i < lwidth * lwidth; i++){
      const randomColor = candyColors[Math.floor(Math.random()* candyColors.length)]
      randomColorArray.push(randomColor)
    }
    setCurrentRandomColorArray(randomColorArray)
  }

  useEffect(()=>{
    createBoard()
  },[])
  
  useEffect(()=>{

    const timer = setInterval(() => {
      checkForColumnOfThree()
      setCurrentRandomColorArray([...currentRandomColorArray])
    },100)
    
    return () => clearInterval(timer)

  }, [checkForColumnOfThree])
  
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
