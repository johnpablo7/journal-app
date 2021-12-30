/**
* @jest-environment node
*/
import 'jsdom-global/register';
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { login } from "../../actions/auth";
import { AppRouter } from "../../routers/AppRouter";
import { act } from 'react-dom/test-utils';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';

jest.mock("../../actions/auth", () => ({
  login: jest.fn(),
}))

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {},
  ui: {
    loading: false,
    msError: null
  },
  notes: {
    active: {
      id: 'ABC',
    },
    notes: []
  }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

describe('Pruebas en <AppRouter />', () => {
  test('debe de llamar el login si estoy autenticado', async () => {
    const auth = getAuth();
    const userCred = await signInWithEmailAndPassword(auth, 'test@testing.com', '123456');
    const user = userCred.user;

    await act(async () => {
      mount(
        <Provider store={store}>
          <AppRouter />
        </Provider>
      )
    });

    expect(login).toHaveBeenCalledWith(user.uid, null);
  });
});

