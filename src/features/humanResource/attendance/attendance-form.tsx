import React from 'react';
import {
  Box,
  Card,
  Typography,
  TextField,
  IconButton,
  Button,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  InputAdornment,
} from '@mui/material';
import { Search, Delete, Edit } from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';



const employeeData = [
  {
    id: 'EMP001',
    name: 'Darlene Robertson',
    email: 'bernardogalaviz@example.com',
    avatar: 'https://i.pravatar.cc/150?img=1',
    status: 'Present',
  },
  {
    id: 'EMP002',
    name: 'Floyd Miles',
    email: 'jefferylalor@example.com',
    avatar: 'https://i.pravatar.cc/150?img=2',
    status: 'Absent',
  },
  // Add more records as needed
];

const AttendanceForm: React.FC = () => {
  const [fromDate, setFromDate] = React.useState<Dayjs | null>(dayjs());
  const [toDate, setToDate] = React.useState<Dayjs | null>(dayjs()); 
  const [search, setSearch] = React.useState('');

  const filteredEmployees = employeeData.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight="bold" mb={1}>
        Attendance
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" mb={3}>
        Employee Attendance Records
      </Typography>

      <Card sx={{ p: 2 }}>
        <Box display="flex" gap={2} flexWrap="wrap" mb={2} alignItems="center">
          <TextField
            placeholder="Search Employee"
            variant="outlined"
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            sx={{ minWidth: 250 }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="From"
              value={fromDate}
              onChange={(newValue) => setFromDate(newValue)}
              slotProps={{ textField: { size: 'small' } }}
            />
            <DatePicker
              label="To"
              value={toDate}
              onChange={(newValue) => setToDate(newValue)}
              slotProps={{ textField: { size: 'small' } }}
            />
          </LocalizationProvider>
          <Button variant="contained" sx={{ ml: 'auto' }}>
            Add Attendance
          </Button>
        </Box>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee</TableCell>
              <TableCell>Employee ID</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEmployees.map((emp) => (
              <TableRow key={emp.id}>
                <TableCell>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Avatar src={emp.avatar} />
                    <Typography>{emp.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{emp.id}</TableCell>
                <TableCell>{emp.email}</TableCell>
                <TableCell>
                  <Typography
                    color={emp.status === 'Present' ? 'green' : 'red'}
                    fontWeight="medium"
                  >
                    {emp.status}
                  </Typography>
                </TableCell>
                <TableCell>
                  <IconButton color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton color="error">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </Box>
  );
};

export default AttendanceForm;
