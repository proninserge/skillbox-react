import {shallow, configure} from 'enzyme';
import {Content} from '../Content';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Content', () => {
    const wrapper = shallow(<Content children={[<div key="poi" className="child-one"/>, <div key="uyt" className="child-two"/>]} />);

    test('should render with children', () => {
        expect(wrapper).toBeDefined();
        expect(wrapper.find('main.content').isEmptyRender()).toBeFalsy();
        expect(wrapper.find('div.child-one').isEmptyRender()).toBeFalsy();
        expect(wrapper.find('div.child-two').isEmptyRender()).toBeFalsy();
    });

    test ('should render snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

});