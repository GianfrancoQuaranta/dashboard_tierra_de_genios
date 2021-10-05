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
                        usersDetail === [] && <p>Cargando...</p>
                    }
                    {
                        usersDetail.map((usd, i) => {

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


                    {/*usersDetail.map((us, i) => {

                        <TableRecords
                        key={usd.user.id + i}
                        id={usd.user.id}
                        fullName={usd.user.firstName + ' ' + usd.user.lastName}
                        email={usd.user.email}
                        birthdate={usd.user.birthdate}
                        adress={usd.user.adress}
                        phoneNumber={usd.user.phoneNumber}
                        country={usd.user.country}
                        avatar={usd.image_perfil}
                        mediosDePago={'PayPal'}
                    />
                    })*/}

                    {/* <TableRecords
                        id={1}
                        fullName={'María Pía'}
                        email={'mariapiamariapia@gmail.com'}
                        birthdate={'18/06/1996'}
                        adress={'la calle 1234fxtxycgvjhkbjnlkjbkhvjgchfcgjvh'}
                        phoneNumber={5493513270775}
                        country={'Argentina'}
                        avatar={'http://localhost:3050/image/user/25'}
                        mediosDePago={'PayPal'}
                    />
                    <TableRecords
                        id={1}
                        fullName={'María Pía'}
                        email={'mariapiamariapia@gmail.com'}
                        birthdate={'18/06/1996'}
                        adress={'la calle 1234fxtxycgvjhkbjnlkjbkhvjgchfcgjvh'}
                        phoneNumber={5493513270775}
                        country={'Argentina'}
                        avatar={'http://localhost:3050/image/user/25'}
                        mediosDePago={'PayPal'}
                    />
                    <TableRecords
                        id={1}
                        fullName={'María Pía'}
                        email={'mariapiamariapia@gmail.com'}
                        birthdate={'18/06/1996'}
                        adress={'la calle 1234fxtxycgvjhkbjnlkjbkhvjgchfcgjvh'}
                        phoneNumber={5493513270775}
                        country={'Argentina'}
                        avatar={'http://localhost:3050/image/user/25'}
                        mediosDePago={'PayPal'}
                    />*/}
                </tbody>
                <tfoot>
                    <ColumnNameTable />
                </tfoot>
            </table>
        </div>
    )
}

export default Table;