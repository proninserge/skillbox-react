import {shallow, configure} from 'enzyme';
import {PostComments} from '../PostComments';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('PostComments', () => {
    const wrapper = shallow(<PostComments />);

    test('should render with the to comments button and the comments amount span', () => {
        expect(wrapper).toBeDefined();
        expect(wrapper.find('button.toComments').isEmptyRender()).toBeFalsy();
        expect(wrapper.find('span.commentsAmount').isEmptyRender()).toBeFalsy();
    });

    // test ('should render snapshot', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });

});