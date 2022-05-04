import { shallow } from "enzyme";
import GridItem from '../../components/GridItem.jsx'

describe('Pruebas <GridGifItem/> ', () => { 
    const title = 'sdffsdf'
    const url = 'afasd'

    const  wrapper = shallow(<GridItem title={title} url={url}/>)

    test('debe mostrar el componente correctamente',() => {

        expect(wrapper).toMatchSnapshot()
    })

    test('debe de tener un parrafo con el title',()=> {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
        
    })

    test('debe obtener la imagen al url y alt de los props',()=> {

        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    } )

    test('debe tener animate',()=> {
        const div = wrapper.find('div')
        const className = div.prop('className')
        expect(className.includes('animate__fadeIn')).toBe(true)
    } )




 })