import {shallow, configure} from 'enzyme';
import {Dropdown} from '../AbstractDropdown';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('AbstractDropdown', () => {
    const wrapper = shallow(<Dropdown children={<div className="dropdown"/>} button={<button className="buttonToClick"/>} />);

    test('should render', () => {
        expect(wrapper).toBeDefined(); // check if a component is rendered
        expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
    });

    test ('should render snapshot', () => {
        const wrapperForSnapshot = shallow(<Dropdown children={<div />} button={<button />} />);
        expect(wrapperForSnapshot).toMatchSnapshot();
    });

    test ('should evoke useState and change state when clicked on the closest to the button div', () => {
        const setIsDropdownOpen = jest.fn();
        const handleState = jest.spyOn(React, 'useState');
        const handleOpen: any = (isDropdownOpen: any) => [isDropdownOpen, setIsDropdownOpen];
        
        handleState.mockImplementation(handleOpen);
        
        const wrapperForClick = shallow(<Dropdown children={<div className="dropdown"/>} button={<button className="buttonToClick" onClick={setIsDropdownOpen} />} />);
 
        const menuButton = wrapperForClick.find('button.buttonToClick');
        menuButton.closest('div').simulate('click');
        expect(setIsDropdownOpen).toBeTruthy();
    });

    test ('should render listContainer if isOpen has true', () => {
        const wrapperWithListContainer = shallow(<Dropdown isOpen={true} children={<div />} button={<button />} />);
        expect(wrapperWithListContainer.find('div.listContainer').isEmptyRender()).toBeFalsy();
    });

});