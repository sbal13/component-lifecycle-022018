import React from 'react'

class ErrorBoundary extends React.Component {
	state = {
		error: false
	}

	render(){
		if (this.state.error){
			return <h1>Something went wrong</h1>
			// return <Ticker test={{dude: "bro"}}/>
		} else {
			return this.props.children
		}

	}

	componentDidCatch(error, info){
		console.log("ERROR")
		// window.location.replace("http://stackoverflow.com");
		this.setState({
			error: true
		})

	}
}

export default ErrorBoundary