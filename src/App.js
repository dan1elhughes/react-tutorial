import React, { Component } from 'react';
import './App.css';

import Count from './components/Count/Count';
import Controls from './components/Controls/Controls';
import Header from './components/Header/Header';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			number: 5,
		};

		this.handleIncrement = this.handleIncrement.bind(this);
		this.handleDecrement = this.handleDecrement.bind(this);
	}

	handleIncrement() {
		this.setState(prevState => {
			const number = prevState.number + 1;
			return { number };
		});
	}

	handleDecrement() {
		this.setState(prevState => {
			const number = prevState.number - 1;
			return { number };
		});
	}

	render() {
		return (
			<div className="App">
				<Header>App goes here!</Header>
				<Controls
					onIncrement={this.handleIncrement}
					onDecrement={this.handleDecrement}
				/>
				<Count number={this.state.number}/>
			</div>
		);
	}
}

export default App;
