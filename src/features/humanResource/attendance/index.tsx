import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  Paper,
  Divider,
  MenuItem,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { employees } from "../../../utils/mockData";

interface AttendancePageProps {
  currentUserId: string;
  currentUserRole: "EMPLOYEE" | "HR";
}

const AttendancePage: React.FC<AttendancePageProps> = ({
  currentUserId,
  currentUserRole,
}) => {
  const currentUser = employees.find((emp) => emp.id === currentUserId);
  const checkedInEmployees = employees.filter((emp) => emp.checkInTime);
  const notCheckedInEmployees = employees.filter((emp) => !emp.checkInTime);

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Attendance Dashboard
      </Typography>

      {currentUserRole === "HR" ? (
        <>
          {/* Checked In Section */}
          <Card sx={{ mb: 4, borderLeft: "6px solid #4caf50" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                ✅ Checked In Employees
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Grid container spacing={2}>
                {checkedInEmployees.map((emp) => (
                  <Grid >
                    <MenuItem>{emp.id}</MenuItem>
                    <Paper elevation={2} sx={{ p: 2 }}>
                      <Typography fontWeight="medium">{emp.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Checked in at {emp.checkInTime}
                      </Typography>
                      {emp.checkOutTime && (
                        <Typography variant="body2" color="text.secondary">
                          Checked out at {emp.checkOutTime}
                        </Typography>
                      )}
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>

          {/* Not Checked In Section */}
          <Card sx={{ borderLeft: "6px solid #ff9800" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                ⏳ Not Yet Checked In
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Grid container spacing={2}>
                {notCheckedInEmployees.map((emp) => (
                   <Grid >
                    <MenuItem>{emp.id}</MenuItem>
                    <Paper elevation={2} sx={{ p: 2, backgroundColor: "#fff8e1" }}>
                      <Typography fontWeight="medium">{emp.name}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </>
      ) : (
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              👤 Employee Attendance Details
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography>
              <strong>Name:</strong> {currentUser?.name}
            </Typography>
            <Typography>
              <strong>Check-in Time:</strong>{" "}
              {currentUser?.checkInTime || "Not yet checked in"}
            </Typography>
            <Typography>
              <strong>Check-out Time:</strong>{" "}
              {currentUser?.checkOutTime || "Not yet checked out"}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default AttendancePage;