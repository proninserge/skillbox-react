import {shallow, configure} from 'enzyme';
import {Card} from '../Card';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Card', () => {
    const wrapper = shallow(<Card />);

    test('should render with a preview box', () => {
        expect(wrapper).toBeDefined();
        expect(wrapper.find('div.postPreview').isEmptyRender()).toBeFalsy();
    });

    test ('should render snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

});