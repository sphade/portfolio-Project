import React, { useEffect, useRef } from "react";

import SVG3DTagCloud from "3d-word-cloud";
function WordCloud() {
  const holder = useRef();
  var entries = [
    { label: "python", target: "_top" },
    {
      label: "HTML5",
      target: "_top",
    },
    {
      label: "CSS",
      target: "_top",
      tooltip: "Lorem ipsum",
    },
    {
      label: "JAVASCRIPT",
      target: "_top",
    },
    {
      label: "TYPESCRIPT",
      target: "_top",
    },
    {
      label: "NEXT.JS",
      target: "_top",
    },
    {
      label: "LOCOMOTIVESCROLL",
      target: "_top",
    },
    {
      label: "THREE.JS",
      target: "_top",
    },
    {
      label: "Gastby",
      target: "_top",
    },
    { label: "Gulp", target: "_top" },
    {
      label: "jQuery",
      target: "_top",
    },
    { label: "REACT", target: "_top" },
    { label: "VUE", target: "_top" },
    { label: "FIREBASE", target: "_top" },
    { label: "NODE", target: "_top" },
    { label: "EXPRESS", target: "_top" },
    { label: "MONGODB", target: "_top" },
    {
      label: "SASS",
      target: "_top",
    },
    {
      label: "GSAP",
      url: "https://greensock.com/docs/#/HTML5/GSAP/TweenLite/",
      target: "_top",
    },
    { label: "jQuery", url: "https://jquery.com/", target: "_top" },

    {
      label: "MOONGOOSE",
      target: "_top",
    },
    {
      label: "GIT",
      target: "_top",
    },
    {
      label: "NPM",
      target: "_top",
    },
    {
      label: "JSON",
      target: "_top",
    },
  ];
  var settings = {
    entries: entries,
    width: 480,
    height: 480,
    radius: "65%",
    radiusMin: 75,
    bgDraw: true,
    bgColor: "rgba(2, 0, 0, 0)",
    opacityOver: 1.0,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 0.8,
    fontColor: "#ffcb2c",
    fontFamily: "stylish-regular",
  };

  useEffect(() => {
    var svg3DTagCloud = new SVG3DTagCloud(holder.current, settings);
  }, []);
  return (
    <>
      <div id="holder" ref={holder}></div>
    </>
  );
}

export default WordCloud;
