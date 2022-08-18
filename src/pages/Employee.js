import React from 'react';
import { useSelector } from 'react-redux';

const Employee = () => {
    const listOfEmployees = useSelector((state) => state?.employee?.listOfEmployees)

    return (
        <div>
            {listOfEmployees.map(employee => (
                <div>
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
            ))
            }
        </div>
    );
};

export default Employee;