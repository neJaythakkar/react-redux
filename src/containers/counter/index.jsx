import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as counterActions from '../../store/actions/counter';

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
	counter: state.ctr.counter
});

const mapDispatchToProps = dispatch => ({
	incrementCounter: () => dispatch(counterActions.incrementCounter()),
	decrementCounter: () => dispatch(counterActions.decrementCounter()),
	addCounter: (value) => dispatch(counterActions.addCounter({value})),
	subtractCounter: (value) => dispatch(counterActions.subtractCounter({value})),
	resetCounter: () => dispatch(counterActions.resetCounter())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
