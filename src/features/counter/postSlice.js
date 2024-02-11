import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "javascript",
    contant: "study",
  },
  {
    id: 2,
    title: "python",
    contant: "study",
  },
];

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, contant, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            contant,
            userId,
          },
        };
      },
    },
  },
});
export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postSlice.actions;
export default postSlice.reducer;
