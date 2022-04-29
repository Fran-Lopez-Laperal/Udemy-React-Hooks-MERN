import { retornaArreglo } from '../../base/07-deses-arr';



describe('pruebas en desetructuración', () => { 

    test('debe retornar un string y un numero', () => { 

        const [letras, numero] = retornaArreglo()

        expect(letras).toEqual('ABC')
        expect(typeof letras).toBe('string')

        expect(numero).toEqual(123)
        expect(typeof numero).toBe('number')

     })
 })