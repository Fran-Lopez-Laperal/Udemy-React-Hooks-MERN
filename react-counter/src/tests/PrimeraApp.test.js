import { render } from "@testing-library/react"
import React from "react"
import PrimeraApp from "../PrimeraApp"


describe('Pruebas en <PrimeraApp/>', () => {

    test('debe mostrar el mensaje Hola, soy fran', () => {

        const saludo = 'Hola, soy Fran'

        const { getByText } = render(<PrimeraApp saludo={saludo} />);

        expect(getByText(saludo)).toBeInTheDocument;

    })
}) 