const initialState = {
	score: 0
}
export default (state=initialState, action)=> {
	console.log('score', action)
	const update = (
		state, 
		mutations) => Object.assign({}, state, mutations)
	switch(action.type) {
		case 'INCREMENT':
			return update(state, {score: state.score + 1})
		case 'DECREMENT':
			return update(state, {score: state.score - 1})
		default:
			return state;
	}
}
