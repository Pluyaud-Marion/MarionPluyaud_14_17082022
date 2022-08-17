import React from 'react';
import { useSelector } from 'react-redux';

const Employee = () => {
    const employee = useSelector((state) => state?.employee?.employee)
    console.log(employee);
    return (
        <div>
            <h1>Page employee</h1>
            <h1>{employee?.firstname}</h1>
            <h1>{employee?.lastname}</h1>
            <h1>{employee?.dateOfBirth}</h1>
            <h1>{employee?.startDate}</h1>
            <h1>{employee?.street}</h1>
            <h1>{employee?.city}</h1>
            <h1>{employee?.zipCode}</h1>
            <h1>{employee?.state}</h1>
            <h1>{employee?.department}</h1>
        </div>
    );
};

export default Employee;