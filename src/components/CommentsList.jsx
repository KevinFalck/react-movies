import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const CommentsList = ({ comments }) => {
  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={8} lg={6}>
          <h2 className="card-text">Commentaires</h2>
          {comments && comments.length > 0 ? (
            <ListGroup>
              {comments.map((comment) => (
                <ListGroup.Item key={comment.id} className="comment-item">
                  {comment.comment}
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <p>Aucun commentaire pour le moment.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CommentsList;
