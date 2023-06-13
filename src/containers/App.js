import React, { Component } from 'react'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component{
    constructor(){
        super();
        this.state={
            robots: [],
            searchfield:''
        }
        console.log("constructor");
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
            return response.json();
        }).then(users=>{
            this.setState({robots: users});

        })
        console.log("component did mount ");
    }
    onSearchChange=(event)=>{
        // console.log(event.target.value);
        this.setState({searchfield: event.target.value})}
    
render(){
    const {robots,searchfield} = this.state;
    const filteredRobots = robots.filter(robots=>{
        return robots.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    console.log("render");
     return !robots.length ? <h1>Loading...</h1> :(<div className='tc'>
        <h1>RobotsFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
            <ErrorBoundary>
        <CardList robots={filteredRobots}/>
        </ErrorBoundary>
        </Scroll>
        </div>
    );

}
}

export default App; 