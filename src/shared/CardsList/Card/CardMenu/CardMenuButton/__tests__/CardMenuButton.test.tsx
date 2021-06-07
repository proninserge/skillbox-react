import {shallow, configure} from 'enzyme';
import {CardMenuButton} from '../CardMenuButton';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('CardMenuButton', () => {
    const wrapper = shallow(<CardMenuButton />);

    test('should render', () => {
        expect(wrapper).toBeDefined();
    });

    // test ('should render snapshot', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });

});