import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetching", async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res ? res : [];
});

export const usersSlice = createSlice({
  name: "users",
  initialState: { status: "loading", data: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
  },
});

export const {}
