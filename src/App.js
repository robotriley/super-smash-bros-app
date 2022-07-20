import Fighter from './Components/Fighter';
import './App.css';

function App() {
  const fighters = ['Sonic', 'Kirby', 'Mario', 'Luigi', 'Snake', 'Link',
  'Pikachu', 'Wario', 'Fox', 'Ryu', 'Zelda', 'Samus']
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
