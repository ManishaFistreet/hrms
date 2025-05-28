export interface EmpProfile {
  email: string;
  mobileNumber: string;
  birthDate: string;
  bloodGroup: string;
  passportNumber: string;
  aadharNumber: string;
  contactPersons: { name: string; relation: string; contact: string }[];
}
