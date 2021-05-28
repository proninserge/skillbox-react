import {shallow, configure} from 'enzyme';
import UserBlock from '../UserBlock';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('UserBlock', () => {
    const wrapper = shallow(<UserBlock />);

    test('should render', () => {
        expect(wrapper).toBeDefined();
        expect(wrapper.find('div.userAvatarBox').isEmptyRender()).toBeFalsy();
        expect(wrapper.find('div.userNameBox').isEmptyRender()).toBeFalsy();
    });

    test('should render Аноним when no name provided', () => {
        expect(wrapper.find('div.userNameBox').text()).toBe('Аноним');
    });

    test('should render USER_NAME when user name provided', () => {
        const USER_NAME = 'Name';
        const wrapper = shallow(<UserBlock userName={`${USER_NAME}`}/>);
        expect(wrapper.find('div.userNameBox').text()).toBe(USER_NAME);
    });

    // test ('should render snapshot', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });

});