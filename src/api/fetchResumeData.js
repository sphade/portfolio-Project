import {
  getResumePending,
  getResumeSuccess,
  getResumeError,
} from "../service/resumeSlice";

export function fetchResume() {
  return async (dispatch) => {
    dispatch(getResumePending());
    setTimeout(async () => {
      try {
        const res = await fetch("/resumeData.json");
        const data = await res.json();
        dispatch(getResumeSuccess(data));
      } catch (err) {
        dispatch(getResumeError());
      }
    }, 3000);
  };
}
