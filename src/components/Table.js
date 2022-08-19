import React from 'react';
import DataTables from "datatables-plugin-react"
import labelsData from '../data/labelsData';

const Table = ({ listOfEmployees }) => {
    console.log(listOfEmployees);
    console.log(labelsData);


    return (
        <div>
            {listOfEmployees && <DataTables labels={labelsData} data={listOfEmployees} />}
        </div>
    );
};

export default Table;