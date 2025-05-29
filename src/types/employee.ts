export interface EmpProfile {
  email: string;
  mobileNumber: string;
  birthDate: string;
  bloodGroup: string;
  passportNumber: string;
  aadharNumber: string;
  contactPersons: { name: string; relation: string; contact: string }[];
}

export interface Employee {
  name: string;
  id: string;
  email: string;
  dept: string;
  designation: string;
  salary: number;
  checkInTime?: string;
  checkOutTime?: string;
  type: 'Office' | 'Remote';
  status: 'Permanent' | 'Probation' | 'Internship';
  avatar: string;
}
