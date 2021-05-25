import {shallow, configure} from 'enzyme';
import {CardsList} from '../CardsList';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('CardsList', () => {
    const wrapper = shallow(<CardsList />);

    test('should render', () => {
        expect(wrapper).toBeDefined();
        expect(wrapper.find('ul.cardsList').isEmptyRender()).toBeFalsy();
    });

    test ('should render snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

});