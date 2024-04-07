// slice.jsx
import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    loading: false,
    user_data: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    get_details: (state, action) => {
      state.user_data = action.payload;
    },
  },
});

export const { setLoading, get_details } = profileSlice.actions;

export default profileSlice.reducer;
