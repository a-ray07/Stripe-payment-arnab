import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Grid } from "@mui/material";

const Middlecomp = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6} lg={4} xl={11}>
        <Card
          sx={{
            borderRadius: "25px",
            height: "100%",
            boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Box
            sx={{
              background: "red",
              borderRadius: "25px 25px 0 0",
              textAlign: "center",
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontSize: 30,
                  fontFamily: "monospace",
                  fontWeight: "bold",
                }}
                color="white"
              >
                Standard
              </Typography>
            </CardContent>
          </Box>
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "left",
                paddingTop: "15px",
              }}
            >
              <CheckCircleIcon sx={{ color: "blue", paddingRight: "10px" }} />
              <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "text.secondary",
                  }}
                >
                  Resolution
                </Typography>
                780p (HD)
              </Typography>
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "left",
                paddingTop: "15px",
              }}
            >
              <CheckCircleIcon sx={{ color: "blue", paddingRight: "10px" }} />
              <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "text.secondary",
                  }}
                >
                  Video quality
                </Typography>
                Good
              </Typography>
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "left",
                paddingTop: "15px",
              }}
            >
              <CheckCircleIcon sx={{ color: "blue", paddingRight: "10px" }} />
              <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "text.secondary",
                  }}
                >
                  Supported device
                </Typography>
                Laptop, tablet
              </Typography>
            </Typography>
          </CardContent>
          <Typography sx={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                height: "0.5px",
                width: "200px",
                background: "black",
                bottom: "-4px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
          </Typography>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button sx={{ fontSize: "35px" }}>$199</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Middlecomp;
