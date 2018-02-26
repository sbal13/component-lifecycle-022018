import React from 'react'
import Ticker from '../components/Ticker'

class MainPage extends React.Component {

	state = {
		number: null
	}

	componentWillMount(){
		console.log("Will MAIN")
	}

	componentDidMount(){
		console.log("Did MAIN")
		this.timer = setInterval(this.generateRandomNumber, 1500)
	};


	generateRandomNumber = () => {
		this.setState({number: Math.round(Math.random()*100)})
	};

	componentWillUnmount() {
		clearInterval(this.timer)
	};


	render (){
		// console.log("Render MAIN")
		// console.log(this.state.number)
		return (
			<div>
				<Ticker number={this.state.number}/>
			</div>
		)
	}
}

export default MainPage

//https://api.iextrading.com/1.0/stock/${this.stock.ticker}/batch?types=quote,news,chart&range=1s&last=1