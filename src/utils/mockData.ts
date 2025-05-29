import { Employee } from "../types/employee";

export const employees: Employee[] = [
  {
    name: 'Darlene Robertson',
    id: '345321231',
    email: "bernardogalaviz@example.com",
    dept: 'Design',
    designation: 'UI/UX Designer',
    salary: 38400,
    checkInTime: "09:15 AM",
    checkOutTime: "05:45 PM",
    type: 'Office',
    status: 'Permanent',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Floyd Miles',
    id: '987890345',
    email: "jefferylalor@example.com",
    dept: 'Development',
    designation: 'PHP Developer',
    salary: 38400,
    checkInTime: "09:15 AM",
    checkOutTime: "05:45 PM",
    type: 'Office',
    status: 'Probation',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Cody Fisher',
    id: '453367122',
    email: "codyfisher@example.com",
    dept: 'Sales',
    designation: 'Sales Manager',
    salary: 38400,
    checkInTime: "09:15 AM",
    checkOutTime: "05:45 PM",
    type: 'Office',
    status: 'Internship',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  // Add more employee objects as needed
];
