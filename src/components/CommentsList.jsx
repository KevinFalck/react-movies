import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const CommentsList = ({ comments }) => {
  return (
    <div className="comments-section">
      <Container>
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={8} lg={6}>
            <h2 className="card-text">Commentaires</h2>
            <ListGroup>
              {comments.map((comment) => (
                <ListGroup.Item key={comment.id} className="comment-item">
                  {comment.comment}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CommentsList;
