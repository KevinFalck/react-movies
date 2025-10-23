import React from "react";
import { Container, Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
  return (
    <Container className="mt-4">
      <div className="loading-spinner">
        <div className="text-center">
          <Spinner animation="border" role="status" />
          <p className="mt-2">Chargement du film...</p>
        </div>
      </div>
    </Container>
  );
};

export default LoadingSpinner;
