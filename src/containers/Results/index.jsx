import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/Results';

class Results extends Component {
	render() {
		const {
			results,
			storeCounterResult,
			deleteCounterResult,
			counter
		} = this.props;
		return (
			<div>
				<button onClick={() => storeCounterResult({ value: counter })}>
					Store Result
				</button>
				<ul className='resultContainer'>
					{results.map(item => (
						<li key={item.id} onClick={() => deleteCounterResult(item)}>
							{item.value}
						</li>
					))}
				</ul>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	results: state.results.results,
	counter: state.ctr.counter
});
const mapDispatchToProps = dispatch => ({
	storeCounterResult: result => dispatch(actions.storeCounterResult(result)),
	deleteCounterResult: item =>
		dispatch(actions.deleteCounterResult({ payload: item }))
});
export default connect(mapStateToProps, mapDispatchToProps)(Results);
