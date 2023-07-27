import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "rgb(239, 241, 243)", padding: "0px" }}
      >
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "25px",
                  fontFamily: "Papyrus",
                }}
              >
                INDIPAY
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
