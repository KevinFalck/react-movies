import React from "react";
import { Container, Row, Alert } from "react-bootstrap";

const ErrorMessage = ({ message }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Alert variant="danger" className="text-center">
          {message}
        </Alert>
      </Row>
    </Container>
  );
};

export default ErrorMessage;
