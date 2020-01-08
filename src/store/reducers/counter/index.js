import * as actionTypes from '../../actionTypes/counter';
import { createReducer } from '../../index';

const initialState = {
	counter: 0
};

const handlers = {
	[`${actionTypes.NAME}/${actionTypes.INCREMENT}`]: (state, payload) => {
		return {
			...state,
			counter: state.counter + 1
		};
	},
	[`${actionTypes.NAME}/${actionTypes.DECREMENT}`]: (state, payload) => {
		return {
			...state,
			counter: state.counter - 1
		};
	},
	[`${actionTypes.NAME}/${actionTypes.ADD}`]: (state, payload) => {
		return {
			...state,
			counter: state.counter + payload.value
		};
	},
	[`${actionTypes.NAME}/${actionTypes.SUBTRACT}`]: (state, payload) => {
		return {
			...state,
			counter: state.counter - payload.value
		};
	},
	[`${actionTypes.NAME}/${actionTypes.RESET}`]: (state, payload) => {
		return {
			...state,
			counter: 0
		};
	}
};

export default createReducer(initialState,handlers);
