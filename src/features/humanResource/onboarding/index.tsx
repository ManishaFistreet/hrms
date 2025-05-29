import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  TextField,
  Button,
  IconButton,
  Paper,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// Dummy candidate data
const candidates = [
  {
    id: "C-1001",
    name: "Darlene Robertson",
    dob: "1995-04-12",
    gender: "Female",
    email: "darlene@example.com",
    jobRole: "Frontend Developer",
    status: "In Progress",
  },
  {
    id: "C-1002",
    name: "Floyd Miles",
    dob: "1990-01-30",
    gender: "Male",
    email: "floyd@example.com",
    jobRole: "Backend Developer",
    status: "Completed",
  },
];

const OnboardingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCandidates = candidates.filter((cand) =>
    cand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Pre-Onboarding
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Candidate Profile Summary
      </Typography>

      {/* Search & Filters */}
      <Card sx={{ p: 3, mb: 4 }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid sx={{xs:12, md:4}}>
              <TextField
                fullWidth
                placeholder="Search Candidate"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
            </Grid>
            <Grid sx={{xs:6, md:3}}>
              <TextField fullWidth type="date" label="From DOB" InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid sx={{xs:6, md:3}}>
              <TextField fullWidth type="date" label="To DOB" InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid sx={{xs:12, md:2}}>
              <Button variant="contained" fullWidth>
                Add Profile
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Candidate Cards */}
      <Paper sx={{ p: 2 }}>
        <Grid container spacing={2}>
          {filteredCandidates.map((cand) => (
            <Grid sx={{xs:12, md:4}} key={cand.id}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6">{cand.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: {cand.id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email: {cand.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  DOB: {cand.dob}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Gender: {cand.gender}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Role: {cand.jobRole}
                </Typography>
                <Typography variant="body2" sx={{ mt: 0.5 }} color="text.secondary">
                  Status: {cand.status}
                </Typography>

                <Box mt={2} display="flex" justifyContent="space-between">
                  <Button size="small" variant="outlined">
                    View Details
                  </Button>
                  <Box>
                    <IconButton size="small" color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton size="small" color="error">
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default OnboardingPage;
