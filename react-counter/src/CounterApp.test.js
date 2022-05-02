const { shallow } = require("enzyme")
import CounterApp from '../src/CounterApp'

describe('pruebas en el <CounterApp/> ', () => {
    test('debe mostrar <CounterApp/> correctamente', () => {
        
        const wrapper = shallow(<CounterApp />)
        expect(wrapper).toMatchSnapshot()

    })

    test('debe mostrar el valor por defecto de 100', () => {
        const wrapper = shallow(<CounterApp value={100}/>)
        const counterText = wrapper.find('h2').text()
        expect(counterText).toBe('100')
    })
})