import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: '#b0dcd1', color:"#bea064", p: 3 }}
      >
        <Box sx={{my:3, "& svg":{
            fontSize:"40px",
            cursor:'pointer',
            mr:3
        },
        "& svg:hover":{
            color:'goldenrod',
            transform:"translateY(8px)",
            transition:'all 400ms'
        },
        }}>
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h6"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
            fontFamily:'"Signika Negative", serif',
          }}
        >
          All Rights Reserved &copy; Techinfo YT
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
