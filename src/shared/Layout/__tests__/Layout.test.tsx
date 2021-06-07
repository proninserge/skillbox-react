import {shallow, configure} from 'enzyme';
import {Layout} from '../Layout';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Layout', () => {
    const wrapper = shallow(<Layout children={[<div key="qwe" className="child-one"/>, <div key="rty" className="child-two"/>]} />);

    test('should render with children', () => {
        expect(wrapper).toBeDefined();
        expect(wrapper.find('div.layout').isEmptyRender()).toBeFalsy();
        expect(wrapper.find('div.child-one').isEmptyRender()).toBeFalsy();
        expect(wrapper.find('div.child-two').isEmptyRender()).toBeFalsy();
    });

    // test ('should render snapshot', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });

});