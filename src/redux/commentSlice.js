import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.push({
        id: Date.now(),
        comment: action.payload,
        note: action.payload.note,
      });
    },
    deleteComment: (state, action) => {
      return state.filter((comment) => comment.id !== action.payload);
    },
  },
});

export const { addComment, deleteComment } = commentSlice.actions;
export default commentSlice.reducer;
