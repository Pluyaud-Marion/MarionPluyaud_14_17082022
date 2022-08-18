import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../feature/employee.slice"

export default configureStore({
    reducer: {
        employee: employeeReducer,
    }
})