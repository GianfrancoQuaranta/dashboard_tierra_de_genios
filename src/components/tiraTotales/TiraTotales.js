// import de react
import React, { useState, useEffect } from 'react';     

// import css
import './TiraTotales.css';

// import components
import Total from '../total/Total';

function TiraTotales() {

    // Estado de todos los productos y de cada categoría
    const [products, setProducts] = useState([]);
    const [totalBronce, setTotalBronce] = useState(0);
    const [totalPlata, setTotalPlata] = useState(0);
    const [totalOro, setTotalOro] = useState(0);

    // Estado de todos los usuarios
    const [users, setUsers] = useState([]);

    // useEffect DidMount
    useEffect(() => {

        console.log('%cSe montó el componente', 'color: green');

        const urlProducts = 'http://localhost:3050/api/products/';
        const urlUsers = 'http://localhost:3050/api/users/';

        const fetchData = async () => {
            try {

                // fetch products
                const productsQuery = await fetch(urlProducts).then(response => response.json());
                //console.log('productsQuery', productsQuery);

                setProducts(productsQuery);
                setTotalBronce(productsQuery.countByCategory.bronce);
                setTotalPlata(productsQuery.countByCategory.plata);
                setTotalOro(productsQuery.countByCategory.oro);

                // fetch users
                const usersQuery = await fetch(urlUsers).then(response => response.json());
                //console.log("usersQuery", usersQuery);

                setUsers(usersQuery);
                //console.log("users", users);

            } catch (e) { console.log(e) };
        }

        fetchData();
        //console.log("products", products);

    }, [])

    // useEffect willUnmount
    useEffect(() => {
        return () => console.log('%cSe desmontó el componente', 'color: red');
    }, []);




    return (
        <div id='div-totales'>
            {/*Condicional total products*/}
            {
                (products.length === 0) && <p>Cargando...</p>
            }
            {
                <Total color={'borderRed'} name={'Products'} quantity={products.count} />
            }

            {/*Condicional total bronce*/}
            {
                (totalBronce === 0) && <p>Cargando...</p>
            }
            {
                <Total color={'borderBlue'} name={'Bronce'} quantity={totalBronce} />
            }

            {/*Condicional total plata*/}
            {
                (totalPlata === 0) && <p>Cargando...</p>
            }
            {
                <Total color={'borderGreen'} name={'Plata'} quantity={totalPlata} />
            }

            {/*Condicional total oro*/}
            {
                (totalOro === 0) && <p>Cargando...</p>
            }
            {
                <Total color={'borderYellow'} name={'Oro'} quantity={totalOro} />
            }
            
            {/*Condicional total users*/}
            {
                (users.length === 0) && <p>Cargando...</p>
            }
            {
                <Total color={'borderViolet'} name={'Users'} quantity={users.count} />
            }
        </div>
    )
}

export default TiraTotales;