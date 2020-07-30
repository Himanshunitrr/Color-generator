import React, { Component } from 'react'


export default class Color extends Component {
  
  render() {
    let myStyle = {
      height: "95vh",
      width: "20vw",
      background: this.props.color
    }
    // console.log(this.myStyle.background)
    return (
      <div className="color" style={myStyle}>
        
      </div>
    )
  }
}
