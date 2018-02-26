import React from 'react'

class Ticker extends React.Component {

		state ={
			color: "red",
			symbol: ""
		}

	  componentWillMount(){
	    console.log("Will TICKER")
	  }
	  componentDidMount(){
	    console.log("Did TICKER")
	  }

	  shouldComponentUpdate(nextProps){
	  	return Math.abs(nextProps.number - this.props.number) > 5
	  }

	  componentWillReceiveProps(nextProps){

	  	let newColor;
	  	let symbol;

	  	if (nextProps.number > this.props.number){
	  		newColor = 'green'
	  		symbol = "▲"
	  	} else if(nextProps.number < this.props.number){
	  		newColor = 'red'
	  		symbol= '▼'
	  	} else {
	  		newColor = 'black'
	  		symbol = null
	  	}

	  	this.setState({
	  		color: newColor,
	  		symbol: symbol
	  	})
	  }


	render(){
		// console.log("Render TICKER")
		return <h1 style={{color: this.state.color}}> {this.props.number} {this.state.symbol}</h1>
	}
}

export default Ticker