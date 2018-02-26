import React from 'react'

class TickerValue extends React.Component {

	state = {
		color: "black",
		symbol: ""
	}

	componentWillReceiveProps(nextProps){
		if (this.props.value < nextProps.value){
			this.setState({
				color: "green",
				symbol: "+"
			})
		} else if(this.props.value > nextProps.value){
			this.setState({
				color: "red",
				symbol: "-"
			})
		}

	}

	shouldComponentUpdate(nextProps, nextState){
		return Math.abs(this.props.value - nextProps.value) > 10
	}


	render(){
		let style = {color: this.state.color}

		return(
			<div style={style}> 
				{this.props.value}
				{this.state.symbol}
			</div>
		)
	}
}

export default TickerValue