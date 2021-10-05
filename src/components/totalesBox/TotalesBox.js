// import de react
import React from 'react';

// import css
import './TotalesBox.css'

// import components
import TiraTotales from '../tiraTotales/TiraTotales';



function TotalesBox() {
    return (
        <div id='div-totalesBox'>
            <h1>Totales</h1>    
            <TiraTotales />
        </div>
    )
}

export default TotalesBox;