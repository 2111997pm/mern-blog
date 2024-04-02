import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },

    signInFaiulure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    updateSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },

    updateFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deletUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },

    deletUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    singoutSuccess: (state) => {
      state.currentUser = null;
      state.error = null;
      state.loading = false;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFaiulure,
  updateStart,
  updateFailure,
  updateSuccess,
  deletUserStart,
  deletUserFail,
  deleteUserSuccess,
  singoutSuccess
} = userSlice.actions;

export default userSlice.reducer;
