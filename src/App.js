import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class App extends Component {
	state = {
		robots: [],
		searchField: ''
	}

	onSearchChange = (event) => {
		this.setState({ searchField:event.target.value });
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
  			.then(response => response.json())
  			.then(robots => this.setState({robots}))
	}

	render() {
		const filteredRobots = this.state.robots
			.filter(robot => 
					{ 
						return robot.name.toLowerCase().includes(this.state.searchField) 
					});

		if(this.state.robots.length === 0) 
		{
			return <h1 className="tc">Loading</h1>;
		} 
		else {
				return (
					<div className="tc">
						<h1>RoboFriends</h1>
						<SearchBox onSearchChange={this.onSearchChange} />
						<Scroll>
							<CardList robots={filteredRobots} />
						</Scroll>
						
					</div>
		);
		}
	
	}
}

export default App;
