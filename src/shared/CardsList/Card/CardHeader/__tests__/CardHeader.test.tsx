import {shallow, configure} from 'enzyme';
import {CardHeader} from '../CardHeader';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('CardHeader', () => {
    const wrapper = shallow(<CardHeader thumbnail={'thumbnail'} created={'created'} title={'title'} author={'author'} />);

    test('should render', () => {
        expect(wrapper).toBeDefined();
        expect(wrapper.find('div.metaData').isEmptyRender()).toBeFalsy();
    });

    // test ('should render snapshot', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });

});