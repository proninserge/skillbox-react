import {shallow, configure} from 'enzyme';
import {CardHeader} from '../CardHeader';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('CardHeader', () => {
    const wrapper = shallow(<CardHeader />);

    test('should render', () => {
        expect(wrapper).toBeDefined();
        expect(wrapper.find('h2.title').isEmptyRender()).toBeFalsy();
        expect(wrapper.find('div.metaData').isEmptyRender()).toBeFalsy();
    });

    // test ('should render snapshot', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });

});