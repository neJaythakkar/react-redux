import React, { Component } from 'react';
import { connect } from 'react-redux';
import Result from '../../components/results';
import * as actions from '../../store/actions/Results';
import * as counterSelectors from '../../store/selectors/counter';
import * as resultsSelectors from '../../store/selectors/results';
import * as classes from './results.module.scss';

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
				<ul className={classes.resultContainer}>
					{results.map(item => (
						<Result {...item} deleteHandler={deleteCounterResult} />
					))}
				</ul>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	results: resultsSelectors.getResults(state),
	counter: counterSelectors.getCounterValue(state)
});
const mapDispatchToProps = dispatch => ({
	storeCounterResult: result => dispatch(actions.storeCounterResult(result)),
	deleteCounterResult: item =>
		dispatch(actions.deleteCounterResult({ payload: item }))
});
export default connect(mapStateToProps, mapDispatchToProps)(Results);
