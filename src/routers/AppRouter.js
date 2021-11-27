import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
} from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';

export const AppRouter = () => {
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
