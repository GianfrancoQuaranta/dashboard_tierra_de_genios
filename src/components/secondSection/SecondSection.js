// import de react
import React from 'react';

// import css
import './SecondSection.css';

// import components
import LastProductInDB from '../lastProductInDB/LastProductInDB'
import ProductsInDB from '../productsInDB/ProductsInDB'

function SecondSection() {
    return (
        <div id='div-secondSection'>
            <LastProductInDB />
            <ProductsInDB />
        </div>
    )
}

export default SecondSection;