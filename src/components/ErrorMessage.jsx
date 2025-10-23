import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

const ErrorMessage = ({ message }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Alert variant="danger" className="text-center">
            {message}
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorMessage;
