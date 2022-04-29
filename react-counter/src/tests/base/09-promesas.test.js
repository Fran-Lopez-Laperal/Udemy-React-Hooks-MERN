import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('pruebas con pormeass', () => { 
    
    test('getHeroeByIdAsync debe retornar un HËroes async', (done)=> {

        const id = 1;

        getHeroeByIdAsync(id)
        .then(heroe => {
            expect(heroe).toBe(heroes[0]);
            done()
        });

    });

    test('deben obtener un erro si el héroe por id no existe', () => { 

        const id = 10;
        getHeroeByIdAsync(id)
        .catch(error => {
            expect(error).toBe('no se puede encontar el heroe');
            done()
        })

     });
 });