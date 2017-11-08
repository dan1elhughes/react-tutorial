import React, { Component } from 'react';
import './App.css';

import Count from './components/Count/Count';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			number: 5,
		};
	}

	render() {
		return (
			<div className="App">
				<p>App goes here!</p>
				<Count number={this.state.number}/>
			</div>
		);
	}
}

export default App;
