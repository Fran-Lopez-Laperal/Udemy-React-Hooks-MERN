import { memo } from "react";
//para que memo funcione debes de poner el component como funcion flecha.
const Small = memo(({value}) => {

    console.log('me volví a llamar');

    return(
        <small>{value}</small>
    )
});

export default Small