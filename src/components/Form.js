import React, { useState } from 'react';
import stateData from '../data/stateData';
import departmentData from '../data/departmentData';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../feature/employee.slice';
import { Modale } from "library-modale";



const Form = () => {
    const dispatch = useDispatch();

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [startDate, setStartDate] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zipCode, setZipCode] = useState(0)
    const [department, setDepartment] = useState("")

    const newEmployee = {
        firstname,
        lastname,
        dateOfBirth,
        startDate,
        street,
        city,
        state,
        zipCode,
        department
    }

    const submitCreateEmployee = (e) => {
        e.preventDefault()
        dispatch(addEmployee(newEmployee))

    }




    return (
        <div className='Form'>
            <form action="" className='formulaire'>
                <label htmlFor="first-name">First Name</label>
                <input onChange={(e) => setFirstname(e.target.value)} type="text" id="first-name" required />
                <label htmlFor="last-name">Last Name</label>
                <input onChange={(e) => setLastname(e.target.value)} type="text" id="last-name" required />
                <label htmlFor="date-of-birth">Date of Birth</label>
                <input onChange={(e) => setDateOfBirth(e.target.value)} type="date" id='date-of-birth' required />
                <label htmlFor="start-date">Start Date</label>
                <input onChange={(e) => setStartDate(e.target.value)} type="date" id='start-date' required />
                <fieldset className='address'>
                    <legend>Address</legend>
                    <label htmlFor="street">Street</label>
                    <input onChange={(e) => setStreet(e.target.value)} type="text" id="street" required />
                    <label htmlFor="city">City</label>
                    <input onChange={(e) => setCity(e.target.value)} type="text" id="city" required />
                    <label htmlFor='state-button'>State</label>
                    <select onChange={(e) => setState(e.target.value)} name='state' id='state' required>
                        {stateData.map(state => (
                            <option value={state?.label} key={state?.label} > {state?.name}</option>
                        ))}
                    </select>
                    <label htmlFor='zip-code'>Zip Code</label>
                    <input onChange={(e) => setZipCode(e.target.value)} id='zip-code' type="number" required />
                </fieldset>
                <label htmlFor='department'>Department</label>
                <select onChange={(e) => setDepartment(e.target.value)} name='department' id='department' required>
                    {departmentData.map(department => (
                        <option value={department?.label} key={department?.label} > {department?.name}</option>
                    ))}
                </select>
            </form>
            <button onClick={submitCreateEmployee} className='button-save'>Save</button>
            <Modale contentModal="Employee Created!" show={false} />
        </div >
    );
};

export default Form;