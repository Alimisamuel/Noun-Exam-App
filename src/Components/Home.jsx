import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          overflow: "scroll",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          bgcolor: "#162719",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: 900,
            color: "#f2e5d7",
            textAlign: "center",
          }}
        >
          WELCoME to SAmmY Fxx Platform
        </Typography>
        <Typography
          sx={{ fontSize: "1rem", fontWeight: 500, color: "#f2e5d7" }}
        >
          Select which Course
        </Typography>

        <Box
          sx={{
            border: "0.5px solid ",
            borderColor: "secondary.main",

            p: 5,
            mt: 5,
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: 3,
          }}
        >
         <Link to="/philosophy">
          <Button
            variant="contained"
            sx={{ color: "secondary.main", height: "40px" }}
          >
            <span style={{ fontWeight: "bolder" }}>GST 203 </span> - Philosophy
          </Button>
          </Link>
              <Link to="/programming">
          <Button
            variant="contained"
            sx={{ color: "secondary.main", height: "40px" }}
          >
            <span style={{ fontWeight: "bolder" }}>CIT 237 </span> - Programming
          </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Home;
