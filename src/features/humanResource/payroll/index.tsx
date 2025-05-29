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
import { employees } from "../../../utils/mockData";

const PayrollPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Payroll
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Employee Salary
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
              Add Salary
            </Button>
          </Grid>
        </Grid>
        </CardContent>
      </Card>

      <Paper sx={{ p: 2 }}>
        <Grid container spacing={2}>
          {filteredEmployees.map((emp) => (
            <Grid sx={{xs:6, md:4}} key={emp.id}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6">{emp.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: {emp.id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email: {emp.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Designation: {emp.designation || "N/A"}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  💰 Salary: ₹{emp.salary || "N/A"}
                </Typography>
                <Box mt={2} display="flex" justifyContent="space-between">
                  <Button size="small" variant="outlined">
                    Generate Slip
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

export default PayrollPage;