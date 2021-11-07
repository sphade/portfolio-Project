import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resume: [],
  isLoading: true,
  hasError: true,
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    getResumePending(state, { payload }) {
      state.isLoading = true;
      state.hasError = false;
    },
    getResumeSuccess(state, { payload }) {
      state.resume = { ...payload };
      state.isLoading = false;
      state.hasError = false;
    },
    getResumeError(state, { payload }) {
      state.hasError = true;
      state.isLoading = true;
    },
  },
});

export const { getResumePending, getResumeSuccess, getResumeError } =
  resumeSlice.actions;
export default resumeSlice.reducer;
export const selectResume = (state) => state.resume;
