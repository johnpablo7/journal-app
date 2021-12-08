import { types } from '../types/types';

// {
//   uid: 'john123456',
//   name: 'John'
// }

export const authReducers = (state = {}, action) => {
	switch (action.type) {
		case types.login:
			return {
				uid: action.payload.uid,
				name: action.payload.displayName
			};

		case types.logout:
			return {};
		default:
			return state;
	}
};
