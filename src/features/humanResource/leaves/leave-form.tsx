import React, { useState } from "react";
import {
  Box, Typography, TextField, Button, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Paper,
  IconButton, Avatar, Chip
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const leaveData = [
  {
    id: "LA-0215",
    name: "Darlene Robertson",
    avatar: "https://i.pravatar.cc/40?img=1",
    type: "Sick Leave",
    from: "2024-03-12",
    to: "2024-03-14",
    reason: "Going to Hospital",
    status: "Approved",
  },
  {
    id: "LA-0215",
    name: "Floyd Miles",
    avatar: "https://i.pravatar.cc/40?img=2",
    type: "Sick Leave",
    from: "2024-03-12",
    to: "2024-03-14",
    reason: "Going to Hospital",
    status: "Pending",
  },
  {
    id: "LA-0215",
    name: "Cody Fisher",
    avatar: "https://i.pravatar.cc/40?img=3",
    type: "Sick Leave",
    from: "2024-03-12",
    to: "2024-03-14",
    reason: "Going to Hospital",
    status: "Declined",
  },
  // Add more mock leave entries here
];

const statusColors: Record<string, "success" | "warning" | "error"> = {
  Approved: "success",
  Pending: "warning",
  Declined: "error",
};

const LeaveForm: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLeaves = leaveData.filter((leave) =>
    leave.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>Leave</Typography>

      {/* Toolbar */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 3, alignItems: "center" }}>
        <TextField
          label="Search Employee"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <TextField type="date" label="From" InputLabelProps={{ shrink: true }} />
        <TextField type="date" label="To" InputLabelProps={{ shrink: true }} />
        <Button variant="contained" color="primary">Add Leave</Button>
      </Box>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee ID</TableCell>
              <TableCell>Employee Name</TableCell>
              <TableCell>Leave Type</TableCell>
              <TableCell>From</TableCell>
              <TableCell>To</TableCell>
              <TableCell>Reason</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredLeaves.map((leave, index) => (
              <TableRow key={index}>
                <TableCell>{leave.id}</TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Avatar src={leave.avatar} />
                    {leave.name}
                  </Box>
                </TableCell>
                <TableCell>{leave.type}</TableCell>
                <TableCell>{leave.from}</TableCell>
                <TableCell>{leave.to}</TableCell>
                <TableCell>{leave.reason}</TableCell>
                <TableCell>
                  <Chip label={leave.status} color={statusColors[leave.status]} />
                </TableCell>
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

export default LeaveForm;
