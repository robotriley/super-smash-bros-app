import Fighter from './Components/Fighter';
import { useState } from 'react'
import './App.css';
import FighterScreen from './Components/FighterScreen';


function App() {
  const fighters = [
    {name: 'Sonic', color: 'firebrick'},
    {name: 'Kirby', color: 'greenyellow'},
    {name: 'Mario', color: 'blue'},
    {name: 'Luigi', color: 'silver'},
    {name: 'Snake', color: 'pink'},
    {name: 'Link', color: 'gold'},
    {name: 'Pikachu', color: 'yellowgreen'},
    {name: 'Wario', color: 'magenta'},
    {name: 'Fox', color: 'red'},
    {name: 'Ryu', color: 'slateblue'},
    {name: 'Zelda', color: 'orange'},
    {name: 'Samus', color: 'dodgerblue'},
  ]

  const [selectedFighter, setSelectedFighter] = useState()
  const handleClick = (element) => {
    setSelectedFighter(element.name)
  }
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className='fighters-grid'>
        {
          fighters.map((element, index) => {
            return(
              <Fighter fighter={element} setSelectedFighter={setSelectedFighter} />
            )
          })
        }
    </div>
    {
      // Conditional render (based on ternary)
      selectedFighter ?
      <FighterScreen selectedFighter={selectedFighter} />
      : null
    }
  </div>
  );
}

export default App;
