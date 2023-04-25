import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6443cf3c90738aa7c0781a5e.mockapi.io";

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async ({ page, abortController }, thunkAPI) => {
    try {
      const { data } = await axios.get("/users", {
        signal: abortController.signal,
        params: { page, limit: 3 },
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
