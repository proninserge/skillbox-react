import {shallow, configure} from 'enzyme';
import {CardMenu} from '../CardMenu';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('CardMenu', () => {
    const wrapper = shallow(<CardMenu postId={'id'}/>);

    test('should render', () => {
        expect(wrapper).toBeDefined();
        expect(wrapper.find('div.dropdown').isEmptyRender()).toBeFalsy();
    });

    // test ('should render snapshot', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });

});