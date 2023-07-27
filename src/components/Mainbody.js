import React from "react";
import Navbar from "./Navbar";
import { Grid, Typography } from "@mui/material";
import Leftcomp from "./Leftcomp";
import Middlecomp from "./Middlecomp";
import Rightcomp from "./Rightcomp";

const Mainbody = () => {
  return (
    <>
      <Navbar />
      <Typography
        variant="h4"
        sx={{ paddingTop: "30px", paddingLeft: "385px" }}
      >
        Choose the plan that’s right for you
      </Typography>
      <Grid
        container
        justifyContent="center"
        spacing={1}
        xl={13}
        sx={{
          marginTop: "18px",
        }}
      >
        <Grid item xs={12} sm={3} xl={2}>
          <Leftcomp />
        </Grid>
        <Grid item xs={12} sm={3} xl={2}>
          <Middlecomp />
        </Grid>
        <Grid item xs={12} sm={3} xl={2}>
          <Rightcomp />
        </Grid>
      </Grid>
    </>
  );
};

export default Mainbody;
