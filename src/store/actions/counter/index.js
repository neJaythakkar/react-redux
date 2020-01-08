import * as actionTypes from '../../actionTypes/counter';
import { createSetter } from '../../index';
const NAME = 'counter';

export const [
	incrementCounter,
	decrementCounter,
	addCounter,
	subtractCounter,resetCounter
] = createSetter(NAME, [
	actionTypes.INCREMENT,
	actionTypes.DECREMENT,
	actionTypes.ADD,
	actionTypes.SUBTRACT,
	actionTypes.RESET
]);

