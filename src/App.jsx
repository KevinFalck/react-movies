import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";
import MovieCard from "./components/MovieCard";
import CommentForm from "./components/CommentForm";
import CommentsList from "./components/CommentsList";

function App() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch("https://jsonfakery.com/movies/random/1");

        if (!response.ok) {
          throw new Error(
            `Erreur HTTP: ${
              response.statusText ? response.statusText + " - " : ""
            }${response.status}`
          );
        }

        const data = await response.json();
        setMovie(data[0]);
      } catch (error) {
        console.error("Error fetching movie:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <MovieCard movie={movie} />
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={8} lg={6}>
          <CommentForm />
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={8} lg={6}>
          <CommentsList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
