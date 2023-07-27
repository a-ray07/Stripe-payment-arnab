import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Leftcomp = () => {
  return (
    <div>
      <Card
        sx={{
          width: "275",
          borderRadius: "25px",
          height: "420px",
          marginRight: "3px",
          marginLeft: "100px",
          boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)",
        }}
      >
        <CardContent>
          <Typography
            sx={{
              fontSize: 30,
              position: "relative",
              fontFamily: "monospace",
              fontWeight: "Bold",
            }}
            color="green"
            gutterBottom
          >
            Basic
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
              480p
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
              Mobile phone
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
                Monthly price
              </Typography>
              $99
            </Typography>
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button sx={{ fontSize: "18px" }}>Pay now</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Leftcomp;
