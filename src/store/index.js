import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../store/employeesSlice';

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});
