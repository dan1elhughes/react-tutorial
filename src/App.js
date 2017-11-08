import React, { Component } from 'react';
import './App.css';

import Count from './components/Count/Count';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			number: 5,
		};

		this.onButtonClick = this.onButtonClick.bind(this);
	}

	onButtonClick() {
		this.setState(prevState => {
			const number = prevState.number + 1;
			return { number };
		});
	}

	render() {
		return (
			<div className="App">
				<p>App goes here!</p>
				<button onClick={this.onButtonClick}>Click me!</button>
				<Count number={this.state.number}/>
			</div>
		);
	}
}

export default App;
