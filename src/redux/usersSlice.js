import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const usersInitialState = {
  error: null,
  isLoading: false,
  items: [],
  canLoadMore: true,
};

const usersSlice = createSlice({
  name: 'users,',
  initialState: usersInitialState,

  reducers: {
    resetUsers(state, action) {
      return usersInitialState;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(fetchUsers.pending, handlePending)
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.items = state.items.concat(payload);
        state.canLoadMore = state.items.length < 11;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, handleRejected),
});

export const usersReducer = usersSlice.reducer;
export const { resetUsers } = usersSlice.actions;
