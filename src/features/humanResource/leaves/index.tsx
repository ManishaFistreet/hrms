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
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// Mock data for leave requests
const leaveRequests = [
  {
    id: "LA-0215",
    name: "Darlene Robertson",
    email: "darlene@example.com",
    type: "Sick Leave",
    from: "2024-03-12",
    to: "2024-03-14",
    reason: "Going to Hospital",
    status: "Approved",
  },
  {
    id: "LA-0216",
    name: "Floyd Miles",
    email: "floyd@example.com",
    type: "Sick Leave",
    from: "2024-03-12",
    to: "2024-03-14",
    reason: "Going to Hospital",
    status: "Pending",
  },
  {
    id: "LA-0217",
    name: "Cody Fisher",
    email: "cody@example.com",
    type: "Sick Leave",
    from: "2024-03-12",
    to: "2024-03-14",
    reason: "Going to Hospital",
    status: "Declined",
  },
  // Add more entries as needed
];

const statusColor: Record<string, "success" | "warning" | "error"> = {
  Approved: "success",
  Pending: "warning",
  Declined: "error",
};

const LeavePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLeaves = leaveRequests.filter((leave) =>
    leave.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Leave Management
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Manage employee leave records
      </Typography>

      <Card sx={{ p: 3, mb: 4 }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid sx={{xs:12, md:4}}>
              <TextField
                fullWidth
                placeholder="Search Employee"
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
              <TextField fullWidth type="date" label="From" InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid sx={{xs:6, md:3}}>
              <TextField fullWidth type="date" label="To" InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid sx={{xs:12, md:2}}>
              <Button variant="contained" fullWidth>
                Add Leave
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Paper sx={{ p: 2 }}>
        <Grid container spacing={2}>
          {filteredLeaves.map((leave, index) => (
            <Grid sx={{xs:12, md:4}} key={index}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6">{leave.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: {leave.id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email: {leave.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Leave Type: {leave.type}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  From: {leave.from}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  To: {leave.to}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Reason: {leave.reason}
                </Typography>
                <Box mt={1}>
                  <Chip label={leave.status} color={statusColor[leave.status]} size="small" />
                </Box>
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

export default LeavePage;