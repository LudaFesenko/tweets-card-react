import { createSlice } from "@reduxjs/toolkit";

const followingInitialState = {
  followingUsers: [],
};
const followingSlice = createSlice({
  name: "following",
  initialState: followingInitialState,

  reducers: {
    addFollowing(state, action) {
      state.followingUsers.push(action.payload);
    },
    removeFollowing(state, action) {
      state.followingUsers = state.followingUsers.filter(
        (id) => id !== action.payload
      );
    },
  },
});

export const { addFollowing, removeFollowing } = followingSlice.actions;
export const followReducer = followingSlice.reducer;
