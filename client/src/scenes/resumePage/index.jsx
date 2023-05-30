import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography,IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ResumePage = () => {
  const user = useSelector((state) => state.user);

  // Extract the necessary user details
  const { firstName, lastName, email, education,occupation} = user;
  const navigate = useNavigate();
  return (
    <Box>
      <center><h1>This is my resume</h1></center>
      <Box padding="2rem 6%">
        {/* Resume Content */}
        <Typography variant="h1" gutterBottom>
          <span style={{ fontWeight: "bold" }}>Name:</span> {firstName} {lastName}
        </Typography>
        <Typography variant="h2" gutterBottom style={{ fontSize: "1.8rem",}}>
        <span style={{ fontWeight: "bold" }}>Email:</span> {email}
        </Typography>
        <Typography variant="h2" gutterBottom style={{ fontSize: "1.8rem",color:"Blue"}}>
        <span style={{ fontWeight: "bold" }}>education:</span> {education}
        </Typography>
        <Typography variant="h2" gutterBottom style={{ fontSize: "1.8rem",color:"brown"}}>
        <span style={{ fontWeight: "bold" }}>Occupation:</span> {occupation}
        </Typography>
      </Box>
          <IconButton onClick={() => navigate("/home")}>
            <Typography variant="subtitle1" style={{color:"blue"}}>
             Home Page
            </Typography>
          </IconButton>
    </Box>
  );
};

export default ResumePage;
