import { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
} from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth'

export const AppRouter = () => {

	const dispatch = useDispatch();

	const [checking, setCheking] = useState(true)
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	useEffect(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			// console.log(user);

			if ( user?.uid ) {
				dispatch( login(user.uid, user.displayName) )
				setIsLoggedIn(true)
			} else {
				setIsLoggedIn(false)
			}

			setCheking(false)

		});
	}, [dispatch, setCheking, setIsLoggedIn]);

	if (checking) {
		return (
			<h1>Espere...</h1>
		)
	}

	return (
		<Router>
			<Routes>
				<Route path="/auth/*" element={<AuthRouter />} />
				<Route path="/" element={<JournalScreen />} />

				<Route
					path="*"
					element={<Navigate replace to="/auth/login" />}
				/>
			</Routes>
		</Router>
	);
};
