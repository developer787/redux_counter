import React, { Component } from 'react'
import {Provider} from 'react-redux'
import store from './store'
import Counter from './counter'
import './App.css'



class App extends Component {
	render() {
		return (
			<div className='App'>
				<Provider store={store}>
					<Counter />
				</Provider>
			</div>
		)
	}
}

export default App
