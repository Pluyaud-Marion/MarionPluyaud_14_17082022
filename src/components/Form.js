import React, { useState } from 'react';
import stateData from '../data/stateData';
import departmentData from '../data/departmentData';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../feature/employee.slice';
import { Modal } from 'library-modal';

/**
 * form component for create a new employee and add data in redux
 * Use library for modal = library-modal
 * @returns {JSX} - React component
 */
const Form = () => {
    const dispatch = useDispatch();

    /**
     * state for each field of the form -> define empty and update onChange on field with the set
     */
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [startDate, setStartDate] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zipCode, setZipCode] = useState(0)
    const [department, setDepartment] = useState("")

    const [show, setShow] = useState(false)
    const [createOk, setCreateOk] = useState(false) //création de l'employé à eu lieu

    /**
     * Object newEmployee with all fields (get onChange in each fields, with the state)
     */
    const newEmployee = {
        firstname,
        lastname,
        startDate,
        department,
        dateOfBirth,
        street,
        city,
        state,
        zipCode,
    }

    // à l'envoi du formulaire, si un des champs est vide => création de l'employé n'a pas eu lieu = passage du state de createOk sur false et passage du state de setShow sur true
    /**
     * 
     * function call onClick the submit button
     * If one field is empty -> update state createOk on false (=for show modal with props : "have to complete all fields") + update state Show on true 
     * If all fields is complete -> update state createOk on true (=for show modal with props : "employee is create") + update state Show on true + use dispatch for add employee in redux
     */

    const submitCreateEmployee = (e) => {
        const inputFirstname = document.querySelector("#firstName").value
        const inputLastname = document.querySelector("#lastName").value
        const inputBirthday = document.querySelector("#date-of-birth").value
        const inputStartDate = document.querySelector("#start-date").value
        const inputStreet = document.querySelector("#street").value
        const inputCity = document.querySelector("#city").value
        const inputState = document.querySelector("#state").value
        const inputZipCode = document.querySelector("#zip-code").value
        const inputDepartment = document.querySelector("#department").value


        if (!inputFirstname || !inputLastname || !inputBirthday || !inputStartDate || !inputStreet || !inputCity || !inputState || !inputZipCode || !inputDepartment) {
            setCreateOk(false)
            setShow(true)
            // à l'envoi du formulaire, si tous les champs sont remplis = 
            //-passage du state de createOk sur true
            //-passage du state de setShow sur true 
            //-reset du formulaire
            //-envoi dans redux du nouveel
        } else {
            setCreateOk(true)
            e.preventDefault()
            dispatch(addEmployee(newEmployee))
            setShow(true) // au click sur créer employé -> passe state à true = affiche la modale (dans conditions du return)
            document.form.reset()
        }
    }


    // fonction appelée au click sur la croix de la modale
    /**
     * Function call onClick for close the modal (change the state Show on false for hide the modal)
     */
    function hide() {
        setShow(false)
    }

    return (
        <div className='Form'>
            <form action="" className='formulaire' name='form'>
                <label htmlFor="firstName">First Name</label>
                <input onChange={(e) => setFirstname(e.target.value)} type="text" id="firstName" required />
                <label htmlFor="lastName">Last Name</label>
                <input onChange={(e) => setLastname(e.target.value)} type="text" id="lastName" required />
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
            {/* si state show est sur true + que state createOk est sur false -> affiche la modale avec message d'erreur */}
            {/* If state Show is true and state CreateOk is false = one field is incomplete => show the modal with error message */}
            {show && !createOk && <Modal contentModal="You must complete all the fields!" hide={hide} />}
            {/* si state show est sur true + que state createOk est sur true -> affiche la modale avec message de réussite */}
            {/* If state Show is true and state CreateOk is true = all fields is ok => show the modal with success message */}
            {show && createOk && <Modal contentModal="Employee Created!" hide={hide} />}
        </div >
    );
};

export default Form;