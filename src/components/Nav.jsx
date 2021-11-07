import { GitHub, LinkedIn, Phone } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../styles/nav.css";
import { selectResume } from "../service/resumeSlice";
import { useSelector } from "react-redux";
function Nav() {
  const { resume } = useSelector(selectResume);

  if (resume) {
    var { name } = resume.main;
    var actions = resume.main?.social;
  }


  return (
    <div className="nav">
      <SpeedDial
        ariaLabel="speeding whatever"
        sx={{ position: "absolute" }}
        icon={<MenuIcon />}
        direction="right"
      >
        {actions.map((action) => (
          <SpeedDialAction
            className="speed"
            key={action.name}
            icon={action.icon }
            tooltipTitle={action.name}
            FabProps={{ href: action.url }}
          />
        ))}
      </SpeedDial>
    </div>
  );
}

export default Nav;
