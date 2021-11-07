import React, { useEffect, useLayoutEffect } from "react";
import "./styles/app.css";
import { fetchResume } from "./api/fetchResumeData";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { selectResume } from "./service/resumeSlice";
import Spinner from "react-spinkit";
import locomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.min.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchResume());
  }, [dispatch]);

  useLayoutEffect(() => {
    let scroll = new locomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
  });

  const { isLoading, hasError } = useSelector(selectResume);

  return (
    <div className="app" data-scroll-container>
      {!isLoading && !hasError ? (
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      ) : (
        <div className="spinner">
          <Spinner name="ball-pulse-sync" />
        </div>
      )}
    </div>
  );
}

export default App;
