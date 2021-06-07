import {shallow, configure} from 'enzyme';
import {PostDropdownControlsItem} from '../PostDropdownControlsItem';
import Adapter from 'enzyme-adapter-react-16';
import {PostControl} from '@utils/constants';

configure({adapter: new Adapter()});

describe('PostDropdownControlsItem', () => {
    const wrapper = shallow(<PostDropdownControlsItem content={'content'} id={PostControl.SAVE}/>);

    test('should render', () => {
        expect(wrapper).toBeDefined();
    });

    test('should render `content` when content provided', () => {
        expect(wrapper.find('li.postDropdownItem').text()).toBe('<PostDropdownIconsSprite /> content');
    });

    // test ('should render snapshot', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });

});