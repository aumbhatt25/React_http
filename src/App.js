import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [moviename, setMoviename] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const index = useRef(0);
  console.log(index.current)

  function apiHandler(){
    setIsloading(true);
    fetch('https://swapi.dev/api/films/').then((response) => {
      return response.json();
    }).then(data => {
      console.log(data.results)
      setIsloading(false);     

      console.log(data.results[0].title)

        console.log(data.results[index.current].title)
        setMoviename(data.results[index.current].title)
      index.current += 1;
      index.current = index.current % data.results.length;
    })
  }

  return (
    <div className="App">
      {isLoading && <p>Loading...</p>}
      <button onClick={apiHandler}>Fetch Movies</button>
      Movies = {moviename ? moviename : ''}
    </div>
  );
}

export default App;
