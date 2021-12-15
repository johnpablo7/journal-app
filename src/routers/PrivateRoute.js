import { Navigate } from 'react-router';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ isAuthenticated, element }) => {

	return (
		(isAuthenticated)
			? (element)
			: <Navigate to="/auth/login" />
	)
}

PrivateRoute.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	element: PropTypes.object.isRequired
}
