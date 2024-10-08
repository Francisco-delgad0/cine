import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import axios from 'axios';
import MovieCarousel from '../componenetes/MovieCarousel';
import PeliculaConHover from '../componenetes/PeliculaConHover';


const Homepage = () => {
  const [peliculas, setPeliculas] = useState([]);
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "66b7a456851fd240629f9890c2795696";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original"
 
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const { data: { results } } = await axios.get(`${API_URL}/discover/movie`, {
        params: {
          api_key: API_KEY,
          language: 'es',
        },
      });

      const slicedResults = results.slice(0, 6);

      setPeliculas(slicedResults);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (

    <div>
      <MovieCarousel />
      <div className="container mb-2">
          <h1 className="text-white text-center mt-4 mb-3">Peliculas</h1>
          <div className="row">
              {peliculas.map((pelicula) => (
                  <PeliculaConHover key={pelicula.id} pelicula={pelicula} imagePath={IMAGE_PATH} />
              ))}
          </div>
      </div>
    </div>
  );
};

export default Homepage;