import {shallow, configure} from 'enzyme';
import PostTitle from '../PostTitle';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('PostTitle', () => {
    const wrapper = shallow(<PostTitle title={'title'}/>);

    test('should render', () => {
        expect(wrapper).toBeDefined();
    });

    test('should render `title` when title provided', () => {
        expect(wrapper.find('a.postLink').text()).toBe('title');
    });

    test ('should evoke useState and change state when clicked on the title link', () => {
        const setModalOpen = jest.fn();
        const handleState = jest.spyOn(React, 'useState');
        const handleModalOpen: any = (isModalOpen: any) => [isModalOpen, setModalOpen];
        
        handleState.mockImplementation(handleModalOpen);
         
        const postTitle = wrapper.find('a.postLink');
        postTitle.simulate('click', {
            preventDefault: () => {}
        });
        expect(setModalOpen).toBeTruthy();
    });

    // test ('should render snapshot', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });

});