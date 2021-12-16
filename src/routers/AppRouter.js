import { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { AuthRouter } from './AuthRouter';
// import { PrivateRoute } from './PrivateRoute';

import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth'
import { startLoadingNotes } from '../actions/notes';
// import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

	const dispatch = useDispatch();

	const [checking, setCheking] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const auth = getAuth();

		onAuthStateChanged(auth, (user) => {

			if (user?.uid) {
				dispatch(login(user.uid, user.displayName));
				setIsLoggedIn(true);

				dispatch(startLoadingNotes(user.uid))

			} else {
				setIsLoggedIn(false);
			}
			setCheking(false);
		});
	}, [dispatch, setCheking, setIsLoggedIn]);

	if (checking) {
		return (
			<h1>Please wait...</h1>
		)
	}

	return (
		<Router>
			<Routes>

				{isLoggedIn ?
					(<Route
						path='/'
						element={<JournalScreen />}
					/>)
					:
					<Route
						path='/*'
						element={<Navigate replace to='auth/login' />}
					/>
				}

				{isLoggedIn &&
					<Route
						path='/auth/*'
						element={<Navigate replace to='/' />}
					/>
				}

				<Route
					path='auth/*'
					element={<AuthRouter />}
				/>

				{/* React Router V6 */}

				{/* <Route
					path="/auth"
					isAuthenticated={isLoggedIn}
					element={
						<PublicRoutes>
							<AuthRouter />
						</PublicRoutes>
					}
				/>

				<Route
					exact
					path="/"
					isAuthenticated={isLoggedIn}
					element={
						<PrivateRoutes>
							<JournalScreen />
						</PrivateRoutes>
					}
				/> */}

			</Routes>
		</Router>
	);
};
