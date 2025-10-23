import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [movie, setMovie] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch("https://jsonfakery.com/movies/random/1");

        if (!response.ok) {
          throw new Error("Failed to fetch movie data");
        }

        const data = await response.json();
        setMovie(data[0]);
        console.log(data[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie:", error);
        setError("Erreur lors de la récupération des données du film");
        setLoading(false);
      }
    };

    fetchMovie();
  }, []);

  return (
    <div className="container mt-4">
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status"></div>
          <p>Chargement du film...</p>
        </div>
      ) : error ? (
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <p className="text-danger text-center">{error}</p>
          </div>
        </div>
      ) : movie ? (
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"
                style={{ height: "400px", objectFit: "cover" }}
                alt={movie.original_title}
              />
              <div className="card-body">
                <h2 className="card-title h4 mb-3">{movie.original_title}</h2>
                <p className="card-text">
                  <span>Sortie le</span> {movie.release_date}
                </p>
                <p className="card-text">{movie.overview}</p>
                <div className="mt-3">
                  <span>Note moyenne:</span> {movie.vote_average}
                  {movie.vote_count && ` (${movie.vote_count} votes)`}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
