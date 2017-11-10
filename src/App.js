import React, { Component } from 'react'
import {Provider, connect} from 'react-redux'
import store from './store'
import counter from './counter'
import { increment, decrement } from './store/actions'
import './App.css'


const mapStateToProps = (state)=> {
	return {
	  score: state.score
	}
}
const mapDispatchToProps = (dispatch)  => ({
		increment: () => dispatch(increment()),
		decrement: () => dispatch(decrement())
});
const Counter = connect(
	mapStateToProps,
	mapDispatchToProps)(counter)

class App extends Component {
	render() {
		return (
			<Provider store={store}>
			<Counter />
			</Provider>
		)
	}
}

export default App
