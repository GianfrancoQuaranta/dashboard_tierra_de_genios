// import react
import React, { useState, useEffect } from 'react';

// import css
import './Table.css';

// import components
import ColumnNameTable from '../columnNameTable/ColumnNameTable';
import TableRecords from '../tableRecords/TableRecords';

// import funciones
import fetchUsersDetail from '../functions/FetchUsersDetail'

function Table() {

    // Declaración estado user
    const [usersDetail, setUsersDetail] = useState([]);

    // didMount
    useEffect(() => {
        console.log('%cSe montó el componente', 'color: green');
        updateUsersDetail();

        console.log(usersDetail)

    }, [])

    //update users detail
    const updateUsersDetail = () => {
        fetchUsersDetail()
            .then(ud => setUsersDetail(ud))

    }


    return (
        <div id='div-table'>
            <table>
                <thead>
                    <ColumnNameTable />
                </thead>
                <tbody>
                    {/*usd == user detail*/}
                    {
                        (usersDetail === [] && usersDetail !== undefined) && <p>Cargando...</p>
                    }
                    {
                        usersDetail?.map((usd, i) => {

                            return <TableRecords
                                key={usd.id + i}
                                id={usd.id}
                                fullName={usd.firstName + ' ' + usd.lastName}
                                email={usd.email}
                                birthdate={usd.birthDate}
                                adress={usd.adress}
                                phoneNumber={usd.phoneNumber}
                                country={usd.country}
                                avatar={usd.imgPerfil}
                                mediosDePago={usd.medioDePago.map(m => m.medio_de_pago)}
                            />
                        })

                    }

                </tbody>
                <tfoot>
                    <ColumnNameTable />
                </tfoot>
            </table>
        </div>
    )
}

export default Table;