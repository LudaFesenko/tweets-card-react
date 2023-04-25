import { createSelector } from "@reduxjs/toolkit";

export const selectUsers = (state) => state.users.items;
export const selectIsLoading = (state) => state.users.isLoading;
export const selectError = (state) => state.users.error;
export const selectLoadMore = (state) => state.users.canLoadMore;
export const selectUserFollow = (state) => state.following.followingUsers;
