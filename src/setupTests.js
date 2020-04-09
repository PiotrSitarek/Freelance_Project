import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


import { shallow } from 'enzyme';
import HomeHeader from '../src/components/HomeHeader';

it('renders without crashing', () => {
    shallow(<HomeHeader />);
});