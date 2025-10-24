import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addComment } from "../redux/commentSlice";
import { Container, Form, Button } from "react-bootstrap";

const schema = yup.object({
  comment: yup
    .string()
    .required("Le commentaire est obligatoire")
    .max(500, "Maximum 500 caractères"),
  note: yup
    .number()
    .required("La note est obligatoire")
    .min(1, "Minimum 1")
    .max(5, "Maximum 5"),
  acceptConditions: yup
    .boolean()
    .oneOf([true], "Vous devez accepter les conditions générales"),
});

const CommentForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(
      addComment({
        comment: data.comment,
        note: data.note,
      })
    );
    reset();
  };

  return (
    <Container>
      <h2 className="card-text">Commentaires</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Ajouter un commentaire</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            {...register("comment")}
            isInvalid={!!errors.comment}
          />
          {errors.comment && (
            <Form.Control.Feedback type="invalid">
              {errors.comment.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Note</Form.Label>
          <Form.Select {...register("note")} isInvalid={!!errors.note}>
            <option value="">Sélectionnez une note</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3 </option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
          {errors.note && (
            <Form.Control.Feedback type="invalid">
              {errors.note.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="J'accepte les conditions d'utilisation"
            {...register("acceptConditions")}
            isInvalid={!!errors.acceptConditions}
          />
          {errors.acceptConditions && (
            <p className="mt-2 text-danger">
              {errors.acceptConditions.message}
            </p>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Ajouter
        </Button>
      </Form>
    </Container>
  );
};

export default CommentForm;
