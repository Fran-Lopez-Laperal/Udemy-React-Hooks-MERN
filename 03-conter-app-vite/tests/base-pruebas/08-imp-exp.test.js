import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe retonar un heroe por  ID', () => {
        const id = 1;
        const hero = getHeroeById(id)

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    });

    test('getHeroeById debe retonar un heroe por  ID', () => {
        const id = 100;
        const hero = getHeroeById(id);
    
        expect(hero).toBeFalsy()
    });

    test('getHeroeByOwner debe retonar los heroes de  DC', () => {
        const owner = 'DC';
        const hero = getHeroesByOwner(owner);
        expect(hero).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ])
    });

    test('getHeroeByOwner debe retonar los heroes por  Marvel', () => {
        const owner = 'Marvel';
        const hero = getHeroesByOwner(owner);
        expect(hero).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ])
    })


})