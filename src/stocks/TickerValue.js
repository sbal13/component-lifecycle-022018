import React from 'react'

class TickerValue extends React.Component {

  state = {
    color: "black"
  }


  componentWillReceiveProps(nextProps){

    let newColor = nextProps.number >= this.props.number ? "limegreen" : "red"

    this.setState({
      color: newColor
    })
  }

  shouldComponentUpdate(nextProps){
    console.log(nextProps)
    return Math.abs(this.props.number - nextProps.number) > 15
  }

  render(){
    return(
      <div style={{color: this.state.color}}>
        {this.props.number}
      </div>
    )
  }

}

export default TickerValue