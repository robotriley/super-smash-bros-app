import Fighter from './Components/Fighter';
import './App.css';

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
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className='fighters-grid'>
        {
          fighters.map((element, index) => {
            return(
              <Fighter fighter={element} />
            )
          })
        }
    </div>
  </div>
  );
}

export default App;
