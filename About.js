import React from "react";
import Layout from "./../components/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "center",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "2rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Food Paradise</Typography>
        <p>
         Craig Stephen, opened the first ‘Food Paradise’ Restaurant in Central, Chennai, on 
         September 27, 1977. Today, there are 37 areas all through Madurai, Trichy, Coimbatore, 
         Bengaluru, Kochi, Hydrabad, Mumbai, and Delhi. Food Paradise Restaurants are well known 
         with a substantial gathering of people, including families, kids, seniors, and business 
         experts. Our benevolent condition is perfect for praising unique events, 
         facilitating a business lunch, or assembling for a flavorful dinner with loved ones.
        </p>
      </Box>
    </Layout>
  );
};

export default About;