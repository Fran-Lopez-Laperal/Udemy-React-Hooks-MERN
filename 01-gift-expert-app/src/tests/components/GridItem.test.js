import { shallow } from "enzyme";
import GridItem from '../../components/GridItem.jsx'

describe('Pruebas <GridGifItem/> ', () => { 
    test('debe mostrar el componente correctamente',() => {
        const  wrapper = shallow(<GridItem/>)
        expect(wrapper).toMatchSnapshot()
    })
 })