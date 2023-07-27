import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Box sx={{ flexGrow: 1, paddingBottom: "5px" }}>
          <AppBar
            position="static"
            sx={{ backgroundColor: "rgb(239, 241, 243)", padding: "0px" }}
          >
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "25px",
                    fontFamily: "Papyrus",
                  },
                  flexGrow: 1,
                }}
              >
                INDIPAY
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </>
  );
};

export default Navbar;
