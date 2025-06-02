import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";

const MainComponent: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Text and Login Cards Section */}
        <Grid sx={{xs:12, md:6}}>
          <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
            CALL FOR INTERNS
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            We are offering internship opportunities in ERP and HRMS.
          </Typography>

          <Grid container spacing={2}>
            {/* ERP Login */}
            <Grid sx={{xs:12, sm:6}}>
              <Card sx={{ backgroundColor: "#e3f2fd" }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="medium" gutterBottom>
                    ERP Login
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Click here to Login
                  </Typography>
                  <Button variant="contained" sx={{ mt: 1 }} color="primary">
                    Login
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* HRMS Login */}
            <Grid sx={{xs:12, sm:6}}>
              <Card sx={{ backgroundColor: "#e8f5e9" }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="medium" gutterBottom>
                    HRMS Login
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Click here to Login
                  </Typography>
                  <Button variant="contained" sx={{ mt: 1 }} color="success">
                    Login
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Image Section */}
        <Grid sx={{xs:12, md:6}}>
          <Box display="flex" justifyContent="center">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/construction-site-illustration-download-in-svg-png-gif-file-formats--excavator-fork-lift-vehicle-pack-buildings-illustrations-2430702.png" // Replace with your image
              alt="Internship Illustration"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainComponent;
