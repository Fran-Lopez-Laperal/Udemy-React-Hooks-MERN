import React, { Fragment } from 'react';
import PropTypes from 'prop-types'


function PrimeraApp({saludo, subtitulo}) {

   
    return (
        <>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </>
    )

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired

}

PrimeraApp.defaultProps = {
    subtitulo: 'soy un subtitulo'
}



export default PrimeraApp