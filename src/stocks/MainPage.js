import React from 'react'
import Ticker from './Ticker'
import Ticker2 from './Ticker2'

class MainPage extends React.Component {

	state = {}

	componentDidMount(){
		setTimeout(() => {
			this.setState({ done: true })
		}, 5000);
	}


	render(){
		return (
			 this.state.done ? "" : <Ticker /> 
		)
	}


}


export default MainPage