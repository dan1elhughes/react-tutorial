import React, { Component } from 'react';
import './App.css';

import Count from './components/Count/Count';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			number: 5,
		};

		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	increment() {
		this.setState(prevState => {
			const number = prevState.number + 1;
			return { number };
		});
	}

	decrement() {
		this.setState(prevState => {
			const number = prevState.number - 1;
			return { number };
		});
	}

	render() {
		return (
			<div className="App">
				<p>App goes here!</p>
				<button onClick={this.decrement}>Decrement!</button>
				<button onClick={this.increment}>Increment!</button>
				<Count number={this.state.number}/>
			</div>
		);
	}
}

export default App;
