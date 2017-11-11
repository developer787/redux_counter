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

const asyncButton = asyncrement =>(
	<button onClick={asyncrement}>
     1 sec delay increment
	</button>
)

const buttons = (increment, decrement, asyncrement) =>(
	<div>
	{addButton(increment)}
	{substractButton(decrement)}
	<hr />
	{asyncButton(asyncrement)}
	</div>
)
export default buttons
