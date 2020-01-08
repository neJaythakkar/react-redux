import counterReducer from '../reducers/counter';
import resultsReducer from '../reducers/Results';

const reducerRegistry =  [
	{ key: 'COUNTER', reducer: counterReducer },
	{ key: 'RESULTS', reducer: resultsReducer }
]

export default reducerRegistry.reduce((accumlator, currentValue) => {
	accumlator[currentValue['key']] = currentValue['reducer'];
	return accumlator;
}, {});

export const [COUNTER,RESULTS] = reducerRegistry.map(item => item.key);