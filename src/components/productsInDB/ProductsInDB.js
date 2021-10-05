// import de react
import React, {useState, useEffect} from 'react';

// import css
import './ProductsInDB.css';

// import components
import Product from '../product/Product';

function ProductsInDB() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log('%cSe montó el componente', 'color: green');

        const urlProducts = 'http://localhost:3050/api/products/';

        const fetchData = async () => {
            try{

            const productsQuery = await fetch(urlProducts).then(response => response.json());

            setProducts(productsQuery.data)
            
            
        } catch(e){ console.log(e) };

        //console.log("products2", products);
    }
    fetchData();   
     
}, [])
    

    return (
        <div id='div-productsInDB'>
            <section id='first-section-productsInDB'>
                <h5>Products in Data Base</h5>
            </section>
            <section id='second-section-productsInDB'>
            {(products !== []) ? products.map((p, i) => {
                
                return <Product key={i} name={p.name}/>
                
            }) : <p>Cargando...</p> }

                <Product name={'Ciudadano Ilustre'}/>
            </section>
        </div>
    )
}

export default ProductsInDB;