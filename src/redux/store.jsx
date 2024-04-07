// store.jsx
import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./slice";

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});

export default store;
