// import de react
import React from 'react';

// import css
import './ColumnNameTable.css';

// import components

function ColumnNameTable() {
    return (
            <tr id='tr-columnNameTable'>
                <th id='id-width-columnNameTable'>Id</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Birthdate</th>
                <th>Adress</th>
                <th>Phone Number</th>
                <th>Country</th>
                <th>Avatar</th>
                <th>Medios de Pago</th>
            </tr>
    )
}

export default ColumnNameTable;