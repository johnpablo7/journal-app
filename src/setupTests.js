import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json';
import '@testing-library/jest-dom/extend-expect';
import Swall from 'sweetalert2';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));


jest.mock('sweetalert2', () => ({
  fire: jest.fn(),
  close: jest.fn(),
}))