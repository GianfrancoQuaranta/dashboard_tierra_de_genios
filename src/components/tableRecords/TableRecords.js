// import de react
import React from 'react';

// import css
import './TableRecords.css';

// import components

function TableRecords(props) {
    return (
            <tr id='tr-tableRecords'>
                <td id='id-width-tableRecords'><p className='td-p-tableRecords'>{props.id}</p></td>
                <td><p className='td-p-tableRecords'>{props.fullName}</p></td>
                <td><p className='td-p-tableRecords'>{props.email}</p></td>
                <td><p className='td-p-tableRecords'>{props.birthdate}</p></td>
                <td><p className='td-p-tableRecords'>{props.adress}</p></td>
                <td><p className='td-p-tableRecords'>{props.phoneNumber}</p></td>
                <td><p className='td-p-tableRecords'>{props.country}</p></td>
                <td>
                    <img src={props.avatar} alt=""/>
                </td>
                <td>{
                        props.mediosDePago.map((mdp, i) => {
                            return <p key={i} className='td-p-tableRecords'>{mdp}</p>
                        })
                    }</td>

                {props.children}
            </tr>

    )
}

export default TableRecords;