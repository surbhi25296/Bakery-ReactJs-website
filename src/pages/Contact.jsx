import React from "react";
import Layout from "../Components/Layout";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import "../styles/ContactStyles.css";
const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{ display: "flex", flexDirection: "column", textAlign: "center",marginTop:'30px' }}
      >
        <Typography
          sx={{
            top: "10%",
            left: "50%",
            color: "#bea064",
            fontWeight: "bold",
            fontFamily: ' "Signika Negative", serif',
            textAlign: "center",
            fontSize: "40px",
          }}
        >
          Contact Us
        </Typography>
        <p>
          We would love to hear from you. Share your thoughts and queries with
          us!
        </p>
      </Box>
      <Box sx={{ display: "flex",justifyContent:'space-around',marginTop:'30px',marginBottom:'30px', "media (max-width:600px)":{
        flexDirection:'column'
      } }}>
        <Box sx={{ margin: "20px", width: "40%" , "@media (max-width:600px)":{
          width:"80%"
        }}}>
          <TableContainer component={Paper}>
            <Table aria-lable="contact table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      backgroundColor: " #bea064",
                      color: "white",
                      fontWeight: "800",
                      fontFamily: ' "Signika Negative", serif',
                      fontSize: "18px",
                      textAlign: "center",
                    }}
                  >
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{ pt: 1 }} />
                    8908908980(Toll Free)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <MailIcon sx={{ pt: 1 }} />
                    backback@gmail.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <LocalPhoneIcon sx={{ pt: 1 }} />
                    8908908980(Toll Free)
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box sx={{ margin: "20px", width: "40%" , "@media (max-width:600px)":{
          width:"80%"
        }}}>
          <Box  >
            <img
              src="https://cdn.shopify.com/s/files/1/0521/3929/4884/files/Contact_Us_Page1.png?v=1615372266"
              alt=""
              width={"30%"}
            />
            <h4>Registered Address:</h4>
            <p>
              32/33 A, Deonar Village Road, Opp. Metal Box Company, Govandi
              East, Mumbai-400088, Maharashtra, India
            </p>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;
