import * as resultsActionTypes from '../../actionTypes/Results';

const initialState = {
	results: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case resultsActionTypes.STORE_RESULT:
			return {
				...state,
				results: state.results.concat({ id: new Date(), ...action.payload })
			};
		case resultsActionTypes.DELETE_RESULT:
			return {
				...state,
				results: state.results.filter(item => item.id !== action.payload.id)
			};
		default:
			return state;
	}
};
