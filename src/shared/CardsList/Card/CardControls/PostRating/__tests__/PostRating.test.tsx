import {shallow, configure} from 'enzyme';
import {PostRating} from '../PostRating';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('PostRating', () => {
    const wrapper = shallow(<PostRating ups={'2'} downs={'0'} />);

    test('should render with the buttons and the rating amount span', () => {
        expect(wrapper).toBeDefined();
        expect(wrapper.find('button.ratingUp').isEmptyRender()).toBeFalsy();
        expect(wrapper.find('button.ratingDown').isEmptyRender()).toBeFalsy();
        expect(wrapper.find('span.ratingAmount').isEmptyRender()).toBeFalsy();
    });

    test('should render `2`', () => {
        expect(wrapper.find('span.ratingAmount').text()).toBe('2');
    });

    // test ('should render snapshot', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });

});