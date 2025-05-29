import React from "react";
import {
  Box, Typography, TextField, Button, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Paper,
  IconButton
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";


const employees = [
  {
    name: "Darlene Robertson",
    id: "345321231",
    email: "bernard@example.com",
    designation: "UI/UX Designer",
    salary: 38400,
  },
  // Add more dummy data heres
];

const PayrollPage: React.FC = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>Payroll</Typography>
      <Typography variant="subtitle1" gutterBottom>Employee Salary</Typography>

      {/* Toolbar */}
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField label="Search Employee" variant="outlined" />
        <TextField type="date" label="From" InputLabelProps={{ shrink: true }} />
        <TextField type="date" label="To" InputLabelProps={{ shrink: true }} />
        <Button variant="contained">Add Salary</Button>
      </Box>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee Name</TableCell>
              <TableCell>Employee ID</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Designation</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Payslip</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((emp) => (
              <TableRow key={emp.id}>
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.id}</TableCell>
                <TableCell>{emp.email}</TableCell>
                <TableCell>{emp.designation}</TableCell>
                <TableCell>{emp.salary}</TableCell>
                <TableCell><Button variant="outlined" size="small">Generate Slip</Button></TableCell>
                <TableCell>
                  <IconButton color="primary"><Edit /></IconButton>
                  <IconButton color="error"><Delete /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PayrollPage;
