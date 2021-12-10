import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducers } from '../reducers/authReducers';

const composeEnhancers =
	(typeof window !== 'undefined' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

// Funcion para añadir una nueva funcionalidad a la aplicación
const reducers = combineReducers({
	auth: authReducers
});

export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
