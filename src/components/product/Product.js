// import react
import React from 'react';

// import css
import './Product.css';

// import components

function Product(props) {
    return (
        <div id="div-product">
            {props.name}
        </div>
    )
}


export default Product;