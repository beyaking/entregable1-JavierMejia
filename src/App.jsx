
import './App.css'
import  quotes from './json/quotes.json'
import QuotesBox from './components/QuotesBox'
import { useState } from 'react'
import colors from './json/colors.json'


function App() {

const getRandomFromArray = arr => {
    const indexRandom = Math.floor(arr.length * Math.random())
    return arr[indexRandom]
  }
  
const [quoteRandom, setQuoteRandom] = useState(getRandomFromArray(quotes))
const [colorRandom, setColorRandom] = useState(getRandomFromArray(colors))

const handleClick = () => {
  setQuoteRandom(getRandomFromArray(quotes))
  setColorRandom(getRandomFromArray(colors))
}

const objStyle = {
  backgroundColor: colorRandom
}



  return (
    <div className="App" style={objStyle}>
   
      <QuotesBox 
      quoteRandom={quoteRandom} 
      handleClick={handleClick}
      colorRandom={colorRandom}
      />
    </div>
  )
}

export default App
