import { configureStore } from "@reduxjs/toolkit";
import resumeSlice from "../service/resumeSlice";


export const store = configureStore({
  reducer: {
 resume:resumeSlice
  },
});
