import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

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
		const { robots, searchField} = this.state;
		const filteredRobots = robots
			.filter(robot => 
					{ 
						return robot.name.toLowerCase().includes(searchField) 
					});

		return (!robots.length) ? <h1 className="tc">Loading</h1> : 
					(
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

export default App;
