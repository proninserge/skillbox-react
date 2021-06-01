import {shallow, configure} from 'enzyme';
import {Card} from '../Card';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Card', () => {
    const wrapper = shallow(<Card author={'random'} title={'random'} id={'random'} preview={{images: [{source: {url: 'random', width: 'random', height: 'random'}}]}} created_utc={'random'} thumbnail={'random'} ups={'random'} downs={'random'} />);

    test('should render with a preview box', () => {
        expect(wrapper).toBeDefined();
        expect(wrapper.find('div.postPreview').isEmptyRender()).toBeFalsy();
    });

    test ('should render snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

});