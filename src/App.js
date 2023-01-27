import React, {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

function App() {
  const [movies,setMovies]= useState([]);
  const [webseries,setWebseries]= useState([
    {
      "Title": "Money Heist",
      "Year": "2017–2021",
      "imdbID": "tt6468322",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_SX300.jpg"
  },
  {
      "Title": "Dirty Sexy Money",
      "Year": "2007–2009",
      "imdbID": "tt0960136",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOWMyNzUyOWEtZWQ2OC00NDViLTg0YjQtMzgyMDZlN2I2ZjI3XkEyXkFqcGdeQXVyMTA1OTAyOTI@._V1_SX300.jpg"
  },
  {
      "Title": "Dirty Money",
      "Year": "2018–2020",
      "imdbID": "tt7889220",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTZjOTI2N2MtYjU0OC00YzFlLWIxNzQtYzY3MjgyOTU0MDJhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
      "Title": "Money Heist: Korea - Joint Economic Area",
      "Year": "2022–",
      "imdbID": "tt13696452",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZDdjYmZlMzQtN2JmZS00N2JkLTg4MGYtMGI3OGVhMWQ1MzMyXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg"
  },
  {
      "Title": "Black Money Love",
      "Year": "2014–2015",
      "imdbID": "tt3565486",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDhlN2JlNDgtNTNjZC00YzcyLWIyN2ItNDkxMmQ3YzdjYTlhXkEyXkFqcGdeQXVyMjExNjgyMTc@._V1_SX300.jpg"
  },
  {
      "Title": "Money, Explained",
      "Year": "2021",
      "imdbID": "tt14492910",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzgxZDhkYzEtNWQ2Yy00ODNkLTk1OGYtYjZhOTI4NmNlYjg4XkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_SX300.jpg"
  },
  {
      "Title": "Win Ben Stein's Money",
      "Year": "1997–2002",
      "imdbID": "tt0118515",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTI3NjA2ZDktZWU3ZC00OWNmLTgyMmEtNzVlYjU4NGMyMjM5XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
  },
  {
      "Title": "Dark Money",
      "Year": "2019",
      "imdbID": "tt8201142",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZTBiYmY5ZjItOTIwOS00ZjBjLWIyMTYtOWI1YTU2Y2I5ZDU1XkEyXkFqcGdeQXVyMTU4NjQ0NDQ@._V1_SX300.jpg"
  },
  {
      "Title": "Money Heist: From Tokyo to Berlin",
      "Year": "2021",
      "imdbID": "tt15384346",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BM2JkMmNhY2MtMTM3MS00YzRmLTkyZGQtZGM4NTE3M2Y4N2M0XkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_SX300.jpg"
  },
  {
      "Title": "I Love Money",
      "Year": "2008–",
      "imdbID": "tt1229295",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjk5ODEyNDI3MF5BMl5BanBnXkFtZTcwNDAwNjU4MQ@@._V1_SX300.jpg"
  }
  ])
  const [searchValue, setSearchValue] = useState('Avengers')

  const getMovieRequest = async (searchValue)=>{
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=e2d4cd82`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
  };
  useEffect(()=>{
    getMovieRequest(searchValue);
  },[searchValue]);

  return (
    <div className="container-fluid movie-app">
    <div className='row d-flex align-items-center mt-4 md-4'>
      <MovieListHeading heading="Movies"/>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
    </div>
    <div className='row'>
      <MovieList movies={movies} />
    </div>
    <div className='row d-flex align-items-center mt-4 mb-4'>
      <MovieListHeading heading="Series" />
    </div>    
    <div className='row'>
      <MovieList movies={webseries} />
    </div>
    </div>
  );
}

export default App;
