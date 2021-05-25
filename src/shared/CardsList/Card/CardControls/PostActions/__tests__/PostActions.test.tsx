import {shallow, configure} from 'enzyme';
import {PostActions} from '../PostActions';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('PostActions', () => {
    const wrapper = shallow(<PostActions />);

    test('should render with the share post and save post buttons', () => {
        expect(wrapper).toBeDefined();
        expect(wrapper.find('button.sharePost').isEmptyRender()).toBeFalsy();
        expect(wrapper.find('button.savePost').isEmptyRender()).toBeFalsy();
    });

    // test ('should render snapshot', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });

});