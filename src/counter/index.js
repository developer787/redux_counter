import React, { Component } from 'react'
import {connect} from 'react-redux'
import buttons from './buttons'
import { increment, decrement } from '../store/actions'
import './counter.css'

const mapStateToProps = (state)=> {
	return {
	  score: state.score
	}
}
const mapDispatchToProps = (dispatch)  => ({
		increment: () => dispatch(increment()),
		decrement: () => dispatch(decrement())
});

const displayCounter = score =>(
	<div className="score">
	  Score: <span>{score}</span>
	</div>
)

class Counter extends Component {
	render(){
		const { 
			score,
		  increment,
		  decrement } = this.props
		return(
			<div className="counter">
			{displayCounter(score)}
			{buttons(increment, decrement)}
			</div>
		)
	}
}
const counter = connect(
	mapStateToProps,
	mapDispatchToProps)(Counter)
export default counter
