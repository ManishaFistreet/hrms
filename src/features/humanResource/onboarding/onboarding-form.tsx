import React from "react";
import {
  Box, Container, Typography, TextField, Grid, MenuItem, Button, Card, CardContent
} from "@mui/material";

const OnboardingForm: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Pre-Onboarding Form
      </Typography>

      {/* Basic Information */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Basic Information</Typography>
          <Grid container spacing={2}>
            <Grid sx={{xs:12, md:6}}><TextField fullWidth label="Candidate Name" required /></Grid>
            <Grid sx={{xs:12, md:6}}><TextField fullWidth type="date" label="Date of Birth" InputLabelProps={{ shrink: true }} required /></Grid>
            <Grid sx={{xs:12, md:6}}><TextField select fullWidth label="Gender" required>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField></Grid>
            <Grid sx={{xs:12, md:6}}><TextField select fullWidth label="Marital Status" required>
              <MenuItem value="Single">Single</MenuItem>
              <MenuItem value="Married">Married</MenuItem>
            </TextField></Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Address Details */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Address Details</Typography>
          <Grid container spacing={2}>
            <Grid sx={{xs:12}}><TextField fullWidth label="Current Address" multiline rows={2} required /></Grid>
            <Grid sx={{xs:12}}><TextField fullWidth label="Permanent Address" multiline rows={2} required /></Grid>
            <Grid sx={{xs:12, md:6}}><TextField fullWidth label="City" required /></Grid>
             <Grid sx={{xs:12, md:6}}><TextField fullWidth label="State" required /></Grid>
             <Grid sx={{xs:12, md:6}}><TextField fullWidth label="Country" required /></Grid>
             <Grid sx={{xs:12, md:6}}><TextField fullWidth label="Pincode" required /></Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Contact Details */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Contact Details</Typography>
          <Grid container spacing={2}>
             <Grid sx={{xs:12, md:6}}><TextField fullWidth label="Mobile Number" required /></Grid>
             <Grid sx={{xs:12, md:6}}><TextField fullWidth label="Alternate Contact Number" /></Grid>
             <Grid sx={{xs:12, md:6}}><TextField fullWidth label="Email ID" required /></Grid>
             <Grid sx={{xs:12, md:6}}><TextField fullWidth label="LinkedIn Profile" /></Grid>
             <Grid sx={{xs:12, md:6}}><TextField fullWidth label="Facebook Profile" /></Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Job Preferences */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Job Preferences</Typography>
          <Grid container spacing={2}>
             <Grid sx={{xs:12, md:6}}><TextField fullWidth label="Desired Job Role" required /></Grid>
             <Grid sx={{xs:12, md:6}}><TextField fullWidth label="Preferred Job Location(s)" /></Grid>
             <Grid sx={{xs:12, md:12}}><TextField select fullWidth label="Applied Employment Type" required>
              <MenuItem value="Full-time">Full-time</MenuItem>
              <MenuItem value="Part-time">Part-time</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
              <MenuItem value="Internship">Internship</MenuItem>
            </TextField></Grid>
             <Grid sx={{xs:12, md:6}}><TextField fullWidth label="Expected Salary" type="number" required /></Grid>
             <Grid sx={{xs:12, md:6}}><TextField fullWidth label="Current Salary" type="number" required /></Grid>
             <Grid sx={{xs:12, md:6}}><TextField select fullWidth label="Notice Period" required>
              <MenuItem value="Days">Days</MenuItem>
              <MenuItem value="Weeks">Weeks</MenuItem>
              <MenuItem value="Months">Months</MenuItem>
            </TextField></Grid>
             <Grid sx={{xs:12, md:6}}><TextField select fullWidth label="Willing to Relocate?" required>
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </TextField></Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Educational Background */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Educational Background</Typography>
          <Grid container spacing={1}>
            {[1, 2, 3].map((i) => (
              <React.Fragment key={i}>
                <Grid sx={{xs:12, md:2.4}}><TextField fullWidth label="Highest Qualification" /></Grid>
                <Grid sx={{xs:12, md:2.4}}><TextField fullWidth label="Field of Study" /></Grid>
                <Grid sx={{xs:12, md:2.4}}><TextField fullWidth label="University/College Name" /></Grid>
                <Grid sx={{xs:12, md:2.4}}><TextField fullWidth label="Year of Passing" /></Grid>
                <Grid sx={{xs:12, md:2.4}}><TextField fullWidth label="Percentage/CGPA" /></Grid>
              </React.Fragment>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* Certifications & Training */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Certifications & Training</Typography>
          <Grid container spacing={2}>
            {[1, 2, 3].map((i) => (
              <React.Fragment key={i}>
                <Grid sx={{xs:12, md:3}}><TextField fullWidth label="Certification Name" /></Grid>
                <Grid sx={{xs:12, md:3}}><TextField fullWidth label="Issuing Organization" /></Grid>
                <Grid sx={{xs:12, md:3}}><TextField fullWidth label="Year of Completion" /></Grid>
                <Grid sx={{xs:12, md:3}}><TextField fullWidth label="Certificate Link" /></Grid>
              </React.Fragment>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Technical & Soft Skills</Typography>
          <Grid container spacing={2}>
            <Grid sx={{xs:12}}><TextField fullWidth label="Primary Technical Skills" required /></Grid>
            <Grid sx={{xs:12}}><TextField fullWidth label="Secondary Technical Skills" /></Grid>
            <Grid sx={{xs:12}}><TextField fullWidth label="Soft Skills" required /></Grid>
            <Grid sx={{xs:12}}><TextField fullWidth label="Tools & Software Known" required /></Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Languages Known */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Languages Known</Typography>
          <Grid container spacing={2}>
            <Grid sx={{xs:12}}><TextField fullWidth label="Language 1 (e.g., English - Fluent)" required /></Grid>
            <Grid sx={{xs:12}}><TextField fullWidth label="Language 2 (optional)" /></Grid>
            <Grid sx={{xs:12}}><TextField fullWidth label="Language 3 (optional)" /></Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Additional Information</Typography>
          <Grid container spacing={2}>
            <Grid sx={{xs:12}}><TextField fullWidth label="Work Authorization" /></Grid>
             <Grid sx={{xs:12, md:6}}><TextField select fullWidth label="Any Career Gap?">
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </TextField></Grid>
            <Grid sx={{xs:12}}><TextField fullWidth multiline rows={2} label="Hobbies & Interests (optional)" /></Grid>
            <Grid sx={{xs:12}}><TextField fullWidth multiline rows={2} label="Other Notes (optional)" /></Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Resume & Documents */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Resume & Documents</Typography>
          <Grid container spacing={2}>
            <Grid sx={{xs:12}}><TextField fullWidth type="file" label="Resume File" InputLabelProps={{ shrink: true }} /></Grid>
            <Grid sx={{xs:12}}><TextField fullWidth type="file" label="Additional Documents" InputLabelProps={{ shrink: true }} inputProps={{ multiple: true }} /></Grid>
          </Grid>
        </CardContent>
      </Card>

      <Box mt={3} display="flex" justifyContent="flex-end">
        <Button variant="contained" color="primary">
          Save Profile
        </Button>
      </Box>
    </Container>
  );
};

export default OnboardingForm;

