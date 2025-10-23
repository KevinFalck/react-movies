import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="movie-card">
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie?.original_title}
            />
            <Card.Body>
              <Card.Title>{movie?.original_title}</Card.Title>
              <Card.Text>
                Sortie le {new Date(movie?.release_date).toLocaleDateString()}
              </Card.Text>
              <Card.Text>{movie?.overview}</Card.Text>
              <Card.Text>
                Note moyenne: {movie?.vote_average}
                {movie?.vote_count && ` (${movie?.vote_count} votes)`}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieCard;
