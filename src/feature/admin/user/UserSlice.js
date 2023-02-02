import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      return state;
    },
  },
});

export const { addUser } = UserSlice.actions;
export const selectUser = (state) => state.UserSlice;
export default UserSlice.reducer;
