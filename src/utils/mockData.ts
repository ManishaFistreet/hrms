import { Employee } from "./types";

export const employees: Employee[] = [
  { id: "1", name: "Alice", checkInTime: "09:00 AM", checkOutTime: "05:00 PM" },
  { id: "2", name: "Bob", checkInTime: "09:30 AM" }, // not checked out
  { id: "3", name: "Charlie" }, // not checked in
  { id: "4", name: "David", checkInTime: "08:45 AM", checkOutTime: "04:30 PM" },
];
