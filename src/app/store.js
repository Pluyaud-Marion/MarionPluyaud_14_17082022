import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../feature/employee.slice"
//import createEmployeeReducer from '../feature/create.slice'

export default configureStore({
    reducer: {
        employee: employeeReducer,
        //createEmployee: createEmployeeReducer,
    }
})