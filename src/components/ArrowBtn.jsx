import { ArrowRightAlt } from "@mui/icons-material";
import React from "react";
import "../styles/arrowbtn.css";
function ArrowBtn({ text, link }) {
  return (
    <a href={link} target="_blank" className="btn mt-2">
      {text} <ArrowRightAlt />
    </a>
  );
}

export default ArrowBtn;
