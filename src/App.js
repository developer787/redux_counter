import React, { Component } from 'react'
import {Provider, connect} from 'react-redux'
import store from './store'
import counter from './counter'
import './App.css'


const mapStateToProps = (state)=> {
	  return {state}
}
const Counter = connect(mapStateToProps)(counter)

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
