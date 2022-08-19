import React from 'react';
import DataTables from "datatables-plugin-react"
import labelsData from '../data/labelsData';

/**
 * use library datatables-plugin-react with 2 props = labelsData(data mocked) and listOfEmployees(props in page Employee)
 * @param {Array} listOfEmployees - props 
 * @returns {JSX} - React component
 */
const Table = ({ listOfEmployees }) => {
    return (
        <div>
            {listOfEmployees && <DataTables labels={labelsData} data={listOfEmployees} />}
        </div>
    );
};

export default Table;