import { connect } from 'react-redux';

import AppView from '../components/App';
import { fetchForecastByCoords } from '../store/actions/actions';

/**
 * Redux Container Component for the entire application. 
 */
const App = connect(
	(state) => ({
		isSingleDay: !!state.forecast.dayDetails,
		isLoading: state.forecast.loading
	}),
	(dispatch) => ({
		onGeolocationRetrieved: (data) => dispatch(fetchForecastByCoords(data))
	})
)(AppView);

export default App;