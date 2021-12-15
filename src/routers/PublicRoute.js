import { Navigate } from 'react-router';
import PropTypes from 'prop-types';


export const PublicRoute = ({ isAuthenticated, element }) => {

	return (
		(isAuthenticated)
			? <Navigate to="/" />
			: (element)
	)
}

PublicRoute.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	element: PropTypes.object.isRequired
}
