import {shallow, configure} from 'enzyme';
import {Header} from '../Header';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Header', () => {
    const wrapper = shallow(<Header />);

    test('should render', () => {
        expect(wrapper).toBeDefined();
        expect(wrapper.find('header.header').isEmptyRender()).toBeFalsy();
    });

    test ('should render snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

});