import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../redux/commentSlice";
import { ListGroup, ListGroupItem, Button, Alert } from "react-bootstrap";

const CommentsList = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);

  const handleDelete = (commentId) => {
    dispatch(deleteComment(commentId));
  };

  return (
    <>
      {comments && comments.length > 0 ? (
        <ListGroup>
          {comments.map((comment) => (
            <ListGroupItem
              key={comment.id}
              className="d-flex justify-content-between align-items-start"
            >
              <div className="flex-grow-1 me-3">
                <h6 className="mb-1">Note: {comment.note}/5</h6>
                <p className="mb-1 text-break">{comment.comment}</p>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleDelete(comment.id)}
              >
                Supprimer
              </Button>
            </ListGroupItem>
          ))}
        </ListGroup>
      ) : (
        <Alert variant="info">Aucun commentaire pour le moment.</Alert>
      )}
    </>
  );
};

export default CommentsList;
