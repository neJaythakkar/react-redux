import * as actionTypes from '../../actionTypes/Results';

export const saveCounterResult = payload => {
	return { type: actionTypes.STORE_RESULT, payload };
};

export const storeCounterResult = payload => (dispatch, getState) =>
	setTimeout(() => {
		console.log(`[inside action creator => results]`,getState());
		dispatch(saveCounterResult(payload));
	}, 2000);

export const deleteCounterResult = ({ payload }) => {
	return { type: actionTypes.DELETE_RESULT, payload };
};
