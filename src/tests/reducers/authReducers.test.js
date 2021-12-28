import { authReducers } from "../../reducers/authReducers"
import { types } from "../../types/types";


describe('Pruebas en authReducer', () => {


  test('debe de realizar el login ', () => {

    const initState = {};

    const action = {
      type: types.login,
      payload: {
        uid: 'abc',
        displayName: 'Fernando'
      }
    };

    const state = authReducers(initState, action);
    // console.log(state);
    expect(state).toEqual({
      uid: 'abc',
      name: 'Fernando'
    })

  })

  test('debe de realizar el logout ', () => {

    const initState = {
      uid: '123456789',
      name: 'Fernando'
    };

    const action = {
      type: types.logout,
    };

    const state = authReducers(initState, action);
    expect(state).toEqual({});

  })

  test('no debe de hacer cambios en el state ', () => {

    const initState = {
      uid: '123456789',
      name: 'Fernando'
    };

    const action = {
      type: 'asdfgh',
    };

    const state = authReducers(initState, action);
    expect(state).toEqual(initState);

  })

})
