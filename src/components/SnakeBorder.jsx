import React from "react";
import "../styles/snakeborder.css";
import { Link } from "react-router-dom";
function SnakeBorder({ text, color, link, bg, classP }) {
  const styles = {
    color: color,
    filter: `hue-rotate(${bg}deg)`,
  };
  return (
    <div>
      <a href={link} target="_blank" className={`snake-border ${classP}`} style={styles}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {text}
      </a>
    </div>
  );
}

export default SnakeBorder;
