import React from 'react'
import TickerValue from './TickerValue'

class Ticker extends React.Component {

	state = {
		number: 0
	}

	componentDidMount(){
		this.interval = setInterval(()=>{
			this.setState({
				number: this.getRandomNumber()
			})
		}, 1000)

	}

	getRandomNumber(){
		return Math.floor(Math.random()*100)
	}

	render (){
		console.log(this.state.number)
		return (
			<TickerValue number={this.state.number} />
		)
	}
	
	componentWillUnmount(){
		console.log("UNMOUNTING")
		clearInterval(this.interval)
	}
}

export default Ticker


