import React from 'react'
import {connect} from 'react-redux'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'

import {setSearchField,requestRobots} from '../actions'

const mapStateToProps = state => { //what piece of state i should listen to and send down as props.
	return{
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		ispending: state.requestRobots.ispending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => { // what props should i listen to 
	return{                                // that are actions and needs to be dispatched
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends React.Component {

	componentDidMount(){
		//console.log('nitish',this.props);
		this.props.onRequestRobots()
	}

	render(){
		const {searchField, onSearchChange, robots, ispending} = this.props;
		console.log("render");
		const filteredRobots = robots.filter (robot =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})

        if(ispending){
        	return <h1>Loading</h1>

        }
        else{
			return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={onSearchChange}/>
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobots}/>
						</ErrorBoundry>
					</Scroll>
				</div>	
			);
		}
	}

}
export default connect(mapStateToProps, mapDispatchToProps)(App);