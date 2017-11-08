import React, { Component } from 'react';
import './App.css';

import Count from './components/Count/Count';

class App extends Component {
	render() {
		return (
			<div className="App">
				<p>App goes here!</p>
				<Count number={5}/>
			</div>
		);
	}
}

export default App;
