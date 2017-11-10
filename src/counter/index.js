import React, { Component } from 'react'
import buttons from './buttons'

import './counter.css'

const displayCounter = score =>(
	<div className="score">
	  Score: <span>{score}</span>
	</div>
)

class Counter extends Component {
	increment(){
		alert(8)
	}
	decrement(){
		alert(-8)
	}
	score(){
		return 200
	}

	render(){
		const { 
			score,
		  increment,
		  decrement } = this
		return(
			<div className="counter">
			{displayCounter(score())}
			{buttons(increment, decrement)}
			</div>
		)
	}
}
export default Counter
