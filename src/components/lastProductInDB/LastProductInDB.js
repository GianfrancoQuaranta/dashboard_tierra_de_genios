// import de react
import React, { useState, useEffect } from 'react';

// import css
import './LastProductInDB.css'

// import components

// import elements


function LastProductInDB(props) {

    //const [products, setProducts] = useState([]);
    const [lastProduct, setLastProduct] = useState({});

    // useEffect DidMount
    useEffect(() => {

        console.log('%cSe montó el componente', 'color: green');

        const urlProducts = 'http://localhost:3050/api/products/';

        const fetchData = async () => {
            try {

                // fetch products
                fetch(urlProducts)
                    .then(response => response.json())
                    .then(data => {

                        //setProducts((data.data));
                        //console.log("products", products);

                        const urlLastProduct = `http://localhost:3050/api/products/${data.data[data.data.length - 1].id}`

                        fetch(urlLastProduct)
                            .then(response2 => response2.json())
                            .then(data2 => {
                                setLastProduct(data2);
                                //console.log("lastProduct", lastProduct);

                            })

                    })

            } catch (e) { console.log(e) };
        }

        fetchData();
        //console.log("lastProduct2",products[products.length-1]);
        //console.log("products", products);
        //console.log("lastProduct", lastProduct);
        //console.log("nameLastProduct", lastProduct.detail[0].name);

    }, [])


    useEffect(() => {
        return () => console.log('%cSe desmontó el componente', 'color: red');
    }, [])


    return (
        <div id="div-lastMovieIn">
            <section id='first-section-lastMovieIn'>
                <h5>Last Product in Data Base</h5>
                {
                    (lastProduct.detail && lastProduct.detail.length > 0) ? <h5>Name: {lastProduct.detail[0].name}</h5> : <h5>Cargando...</h5>
                }
                
            </section>
            <section id='second-section-lastMovieIn'>
                <article>
                    <img src={(lastProduct.detail && lastProduct.detail.length > 0) ? (lastProduct.detail[0].image) : <h5>Cargando...</h5>} alt="Product" />
                </article>
                <p>Privilegios del producto:</p>
                <ul id='second-section-ul-lastMovieIn'>

                {(lastProduct.detail && lastProduct.detail.length > 0) ? (lastProduct.detail[0].info_category.privileges.map((p, i) => {
                    
                    return <li key={i}>{p.privilege}</li>

                })) : <h5>Cargando...</h5>}
                </ul>
            </section>

        </div>
    )
}

export default LastProductInDB;