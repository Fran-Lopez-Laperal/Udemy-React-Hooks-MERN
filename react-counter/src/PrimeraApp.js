import React, { Fragment } from 'react';


function PrimeraApp() {

    const saludo ={
        nombre : 'Fran',
        edad: 23
    }


    return (
        <>
            <h1>{saludo.nombre}</h1>
            <small>{saludo.edad}</small>
            <p>Mi primera aplicación</p>
        </>
    )

}

export default PrimeraApp