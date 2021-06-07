import {shallow, configure} from 'enzyme';
import {PostModal} from '../PostModal';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('PostModal', () => {
    const wrapper = shallow(<PostModal title={'random'} handleCloseButtonClick={()=>{}}/>);

    test('should render w/ the close button', () => {
        expect(wrapper).toBeDefined();
        expect(wrapper.find('div.postMain').isEmptyRender()).toBeFalsy();
        expect(wrapper.find('h2.postHeader').isEmptyRender()).toBeFalsy();
        expect(wrapper.find('button.closeModal').isEmptyRender()).toBeFalsy();
    });

    test('should render `random` in the header section', () => {
        expect(wrapper.find('h2.postHeader').text()).toBe('random');
    });

    // test ('should render snapshot', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });

});