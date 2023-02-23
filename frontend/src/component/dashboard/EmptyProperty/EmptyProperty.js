import React from "react";
import "./EmptyProperty.css";

import Illustration from "../../../Images/Illustration.png";
import {  Stack } from "@mui/material";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const EmptyProperties = () => {
  return (
    <>
    <div className="main_sec">
        <div className="EmptyProperties">
          <img src={Illustration} />
          <h4>Create your first Property</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <Link variant="primary" className="btn btn-primary" component={RouterLink} to="/app">+ Create Property</Link>
        </div>
      </div>
    </>
  );
};

export default EmptyProperties;
