import { useState } from 'react';
import './App.css';

var c=0;

function App() {
  const [movies, setMovies] = useState({});
  const [moviename, setMoviename] = useState('');
  const [isLoading, setIsloading] = useState(false);

  function apiHandler(){
    setIsloading(true);
    fetch('https://swapi.dev/api/films/').then((response) => {
      return response.json();
    }).then(data => {
      setMovies(data.results);
      setIsloading(false);     
       
      // console.log(c)
      // console.log(movies[0].title)

      // console.log(movies[0])

      if(movies[c] !== undefined){
        console.log(movies[c].title)
        setMoviename(movies[c].title)
      }
      c++;
      if(c>5){
        c=0;
      }
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
