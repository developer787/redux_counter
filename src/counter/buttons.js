import React from 'react'

const addButton = increment =>(
	<button onClick={increment}>
	+
	</button>
)
const substractButton = decrement =>(
	<button onClick={decrement}>
	-
	</button>
)

const buttons = (increment, decrement) =>(
	<div>
	{addButton(increment)}
	{substractButton(decrement)}
	</div>
)
export default buttons
