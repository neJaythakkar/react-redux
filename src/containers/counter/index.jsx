import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as counterActions from '../../store/actions/counter';
import * as selectors from '../../store/selectors/counter';

class Counter extends Component {
	render() {
		const {
			counter,
			incrementCounter,
			decrementCounter,
			addCounter,
			subtractCounter,
			resetCounter
		} = this.props;
		return (
			<div className='counter container'>
				<div className='counter'>
					<h1>Counter : {counter}</h1>
				</div>
				<div className='control-button-panel'>
					<button onClick={incrementCounter}>Increment</button>
					<button onClick={decrementCounter}>Decrement</button>
					<button onClick={() => addCounter(5)}>Add 5</button>
					<button onClick={() => subtractCounter(5)}>Subtract 5</button>
					<button onClick={resetCounter}>Reset Counter</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	counter: selectors.getCounterValue(state)
});

const mapDispatchToProps = {
	incrementCounter: counterActions.incrementCounter,
	decrementCounter: counterActions.decrementCounter,
	addCounter: (value) => counterActions.addCounter({value}),
	subtractCounter: (value) => counterActions.subtractCounter({value}),
	resetCounter: counterActions.resetCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
