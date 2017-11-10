import React, { Component } from 'react'
import buttons from './buttons'

import './counter.css'

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
export default Counter
