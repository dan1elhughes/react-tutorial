import React, { Component } from 'react';
import './App.css';

import Hello from './components/Hello/Hello';

class App extends Component {
	render() {
		return (
			<div className="App">
				<p>App goes here!</p>
				<Hello foo="hello"/>
				<Hello foo="this"/>
				<Hello foo="is"/>
				<Hello foo="dog"/>
			</div>
		);
	}
}

export default App;
