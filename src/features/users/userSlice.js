import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "chenrayan" },
  { id: 2, name: "mani" },
];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
export const selectAllUsers = (state) => state.users;
export default userSlice.reducer;
