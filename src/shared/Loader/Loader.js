import React from "react";
import "./Loader.css";
import { Backdrop, CircularProgress } from "@mui/material";
import CarAnimation from "./caranimation.gif";

function Loader() {
  return (
    <Backdrop
      sx={{ color: "#ff0000", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color="inherit" thickness={4} size={60} />
      {/* <div> <img src={CarAnimation}/></div> */}
      <br></br>
      {/* <p className="Loading">Loading...</p> */}
    </Backdrop>
  );
}

export default Loader;
