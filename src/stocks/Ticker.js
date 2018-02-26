import React from 'react'
import TickerValue from './TickerValue'
import ErrorBoundary from './ErrorBoundary'

class Ticker extends React.Component {

	state = {
		value: 0
	}

	componentDidMount(){

		this.interval = setInterval(this.setNumber, 1000)
		
	}

	setNumber = () => {
		this.setState({
			value: this.randomNumber()
		})
	}

	// getStocks = () => {
	// 	console.log("FETCHING")
	// 	// fetch("https://api.iextrading.com/1.0/stock/GOOGL/batch?types=quote,news,chart&range=1s&last=1")
	// 	// .then(res => res.json())
	// 	// .then(res => this.setState({value: res.quote.iexRealtimePrice}))
	// }

	randomNumber = () => {
		return Math.floor(Math.random()*100)
	}

	render (){
		return (
			<ErrorBoundary >
				<TickerValue value={this.state.value}/>
			</ErrorBoundary>
		)
	}
	
}

export default Ticker


//https://api.iextrading.com/1.0/stock/${this.props.stock}/batch?types=quote,news,chart&range=1s&last=1